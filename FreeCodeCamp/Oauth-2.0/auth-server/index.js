import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { randomBytes, createHash } from 'crypto';
import { SignJWT, exportJWK, importPKCS8, importSPKI } from "jose";
import fs from "fs";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Storage
const clients = new Map();
const authorizationCodes = new Map();
const refreshTokens = new Map();

// Register demo client
clients.set("demo-client", {
    client_id: "demo-client",
    redirectUris: ["http://localhost:4000/callback"],
});

// Keys
const PRIVATE_KEY_PEM = fs.readFileSync("./private_key.pem", "utf8");
const PUBLIC_KEY_PEM = fs.readFileSync("./public_key.pem", "utf8");

const ISSUER = "http://localhost:3000";
const KEY_ID = "demo-key-1";

// Helpers
function base64url(input) {
    return input.toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/g, "");
}

function sha256Base64url(str) {
    const hash = createHash("sha256").update(str).digest();
    return base64url(hash);
}

function generateCode() {
    return base64url(randomBytes(32));
}

function getDemoUser() {
    return { sub: "alice", name: "Alice Example", email: "alice@example.com" };
}

// Authorization endpoint
app.get("/authorize", (req, res) => {
    const { response_type, client_id, redirect_uri, scope = "", state, code_challenge, code_challenge_method } = req.query;

    const client = clients.get(client_id);
    if (!client) return res.status(400).send("Unknown client_id");
    if (!client.redirectUris.includes(redirect_uri)) return res.status(400).send("Invalid redirect_uri");
    if (response_type !== "code") return res.status(400).send("Only response_type=code supported");
    if (!code_challenge || code_challenge_method !== "S256") return res.status(400).send("PKCE required");

    const user = getDemoUser();
    const code = generateCode();

    authorizationCodes.set(code, {
        clientId: client_id,
        redirectUri: redirect_uri,
        codeChallenge: code_challenge,
        scope,
        user,
        expiresAt: Date.now() + 5 * 60 * 1000, // 5 min
    });

    const redirect = new URL(redirect_uri);
    redirect.searchParams.set("code", code);
    if (state) redirect.searchParams.set("state", state);

    res.redirect(redirect.toString());
});

// Token endpoint
app.post("/token", async (req, res) => {
    const { grant_type } = req.body;

    if (grant_type === "authorization_code") {
        const { code, redirect_uri, client_id, code_verifier } = req.body;
        const record = authorizationCodes.get(code);

        if (!record) return res.status(400).json({ error: "invalid_grant", error_description: "Unknown code" });
        if (record.expiresAt < Date.now()) {
            authorizationCodes.delete(code);
            return res.status(400).json({ error: "invalid_grant", error_description: "Code expired" });
        }
        if (record.clientId !== client_id || record.redirectUri !== redirect_uri) {
            return res.status(400).json({ error: "invalid_grant", error_description: "Client mismatch" });
        }

        // PKCE validation
        const computedChallenge = sha256Base64url(code_verifier);
        if (computedChallenge !== record.codeChallenge) {
            return res.status(400).json({ error: "invalid_grant", error_description: "PKCE validation failed" });
        }

        // One-time use code
        authorizationCodes.delete(code);

        // Sign JWT access token
        const privateKey = await importPKCS8(PRIVATE_KEY_PEM, "RS256");
        const accessToken = await new SignJWT({
            scope: record.scope,
            name: record.user.name,
            email: record.user.email
        })
        .setProtectedHeader({ alg: "RS256", kid: KEY_ID })
        .setIssuer(ISSUER)
        .setAudience(client_id)
        .setSubject(record.user.sub)
        .setIssuedAt()
        .setExpirationTime("15m")
        .sign(privateKey);

        const refresh_token = generateCode();
        refreshTokens.set(refresh_token, {
            sub: record.user.sub,
            scope: record.scope,
            clientId: client_id
        });

        return res.json({
            access_token: accessToken,
            token_type: "Bearer",
            expires_in: 900,
            refresh_token,
            scope: record.scope
        });
    }

    if (grant_type === "refresh_token") {
        const { refresh_token, client_id } = req.body;
        const record = refreshTokens.get(refresh_token);
        if (!record || record.clientId !== client_id) return res.status(400).json({ error: "invalid_grant" });

        const privateKey = await importPKCS8(PRIVATE_KEY_PEM, "RS256");
        const accessToken = await new SignJWT({ scope: record.scope })
            .setProtectedHeader({ alg: "RS256", kid: KEY_ID })
            .setIssuer(ISSUER)
            .setAudience(client_id)
            .setSubject(record.sub)
            .setIssuedAt()
            .setExpirationTime("15m")
            .sign(privateKey);

        return res.json({ access_token: accessToken, token_type: "Bearer", expires_in: 900 });
    }

    res.status(400).json({ error: "unsupported_grant_type" });
});

// JWKS endpoint
app.get("/.well-known/jwks.json", async (req, res) => {
    const publicKey = await importSPKI(PUBLIC_KEY_PEM, "RS256");
    const jwk = await exportJWK(publicKey);

    jwk.use = "sig";
    jwk.alg = "RS256";
    jwk.kid = KEY_ID;

    res.json({ keys: [jwk] });
});

app.listen(3000, () => console.log("Auth Server running on http://localhost:3000"));
