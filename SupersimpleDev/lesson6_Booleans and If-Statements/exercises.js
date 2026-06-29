// ============================================================
//  BOOLEANS & CONDITIONAL LOGIC IN JAVASCRIPT
//  Topics: Comparison Operators, Truthy/Falsy, Conditionals,
//          Ternary, Logical Operators (&&, ||, !)
// ============================================================


// ─────────────────────────────────────────────
//  SECTION 1 — COMPARISON OPERATORS
//  All comparisons return a boolean: true or false
// ─────────────────────────────────────────────

console.log('--- Comparison Operators ---');

console.log(5 > 3);   // true  — greater than
console.log(5 < 3);   // false — less than
console.log(5 >= 3);  // true  — greater than or equal to
console.log(5 <= 3);  // false — less than or equal to
console.log(5 == 3);  // false — loose equality  (value only, ignores type)
console.log(5 != 3);  // true  — loose inequality (value only, ignores type)

// ── Strict vs Loose Equality ──────────────────
// == checks VALUE only  →  5 == '5' is TRUE  (type coercion happens)
// === checks VALUE + TYPE → 5 === '5' is FALSE (number ≠ string)
// Best practice: always use === and !== to avoid unexpected bugs

console.log(5 === 5);   // true  — same value, same type
console.log(5 === '5'); // false — same value, different type (number vs string)
console.log(5 !== '5'); // true  — strict not-equal: types differ


// ─────────────────────────────────────────────
//  SECTION 2 — TRUTHY & FALSY VALUES
//  JavaScript treats every value as either truthy or falsy
//  in a boolean context (e.g. inside an if statement)
// ─────────────────────────────────────────────

console.log('\n--- Truthy & Falsy ---');

// Falsy values — these all evaluate to false:
//   false | 0 | '' | null | undefined | NaN

// Truthy values — everything else, including:
//   true | 1 | 'hello' | [] | {} | -1

// ── Falsy example ─────────────────────────────
if (false) {
    console.log('This will NOT run');
} else {
    console.log('Falsy block: the else runs because the condition is false');
}

// ── Truthy example ────────────────────────────
if (true) {
    console.log('Truthy block: this runs because the condition is true');
}

// ── Real-world truthy/falsy usage ─────────────
// Instead of writing: if (cartQty !== 0)
// You can simply write: if (cartQty) — because 0 is falsy, any other number is truthy

const cartQty = 5;
if (cartQty) {
    console.log('You have items in your cart');  // runs — 5 is truthy
} else {
    console.log('Your cart is empty');           // skipped — 0 would be falsy
}

// ── Special values to be aware of ────────────
console.log(!0);              // true  — ! (NOT) flips false → true (0 is falsy)
console.log('text' / 5);     // NaN   — Not a Number (falsy, result of invalid math)
console.log(undefined);      // undefined (falsy, means a variable has no value)


// ─────────────────────────────────────────────
//  SECTION 3 — TERNARY OPERATOR
//  Shorthand for a simple if/else that returns a value.
//  Syntax: condition ? valueIfTrue : valueIfFalse
// ─────────────────────────────────────────────

console.log('\n--- Ternary Operator ---');

// ── Truthy condition ──────────────────────────
const result = true ? 'truthy' : 'falsy'; // condition is true → returns 'truthy'
console.log(result); // 'truthy'

// ── Falsy condition ───────────────────────────
const result1 = 0 ? 'truthy' : 'falsy';  // 0 is falsy → returns 'falsy'
console.log(result1); // 'falsy'

// ── Equivalent long-form (for comparison) ─────
// let result2;
// if (true) {
//     result2 = 'truthy';
// } else {
//     result2 = 'falsy';
// }


// ─────────────────────────────────────────────
//  SECTION 4 — LOGICAL OPERATORS: && || !
//
//  &&  (AND)  — both sides must be truthy to return truthy
//  ||  (OR)   — at least one side must be truthy to return truthy
//  !   (NOT)  — flips truthy ↔ falsy
// ─────────────────────────────────────────────

console.log('\n--- Logical Operators ---');

// ── AND (&&) — Short-circuit evaluation ───────
// If the LEFT side is falsy, JS skips the right side entirely.
// If the LEFT side is truthy, JS evaluates and returns the right side.

false && console.log('This will NOT run'); // left is false → right is skipped

const message = false && 'Yellow';
console.log(message); // false — left was falsy, so && returned it immediately

// Truth table for &&:
//   true  && true  → true
//   true  && false → false
//   false && true  → false   ← short-circuits here, right side ignored
//   false && false → false

// ── OR (||) — Default/Fallback values ─────────
// Returns the FIRST truthy value it finds, or the LAST value if all are falsy.
// Commonly used to set default/fallback values.

const currency = undefined || 'EUR' || 'GBP';
// undefined is falsy → skip. 'EUR' is truthy → return it. 'GBP' never checked.
console.log(currency); // 'EUR'

// Truth table for ||:
//   true  || true  → true   ← short-circuits, right side ignored
//   true  || false → true   ← short-circuits, right side ignored
//   false || true  → true
//   false || false → false


// ─────────────────────────────────────────────
//  SECTION 5 — IF / ELSE IF / ELSE
//  Combining comparison and logical operators
//  in real conditional structures
// ─────────────────────────────────────────────

console.log('\n--- Conditionals ---');

const age = 18;
const isPermitted = true;

// ── AND: both conditions must be met ──────────
if (age >= 16 && isPermitted) {
    console.log('You are old enough and have permission to drive.');
} else {
    console.log('You do not meet the driving requirements.');
}

// ── OR: only one condition needs to be met ────
if (age <= 16 || isPermitted) {
    console.log('You either meet the age requirement OR have special permission.');
} else {
    console.log('You meet neither the age nor the permission requirement.');
}


// ─────────────────────────────────────────────
//  SECTION 6 — PRACTICAL EXAMPLE
//  Using the built-in Date object to get the
//  current hour and display a time-based greeting
// ─────────────────────────────────────────────

console.log('\n--- Time-based Greeting ---');

const hours = new Date().getHours(); // returns 0–23

if (hours >= 6 && hours < 12) {
    console.log('Good morning!');       // 06:00 – 11:59
} else if (hours >= 12 && hours < 18) {
    console.log('Good afternoon!');     // 12:00 – 17:59
} else {
    console.log('Good evening!');       // 18:00 – 05:59
}