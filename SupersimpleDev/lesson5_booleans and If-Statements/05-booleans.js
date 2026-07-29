// ============================================================
// BOOLEANS & CONDITIONAL LOGIC IN JAVASCRIPT
// Topics:
// - Comparison Operators
// - Equality Operators
// - Truthy & Falsy Values
// - Ternary Operator
// - Logical Operators (&&, ||, !)
// - Conditionals
// ============================================================

console.log('--- Template Literals Always Return a String ---');

// Template literals always produce a string.
console.log(typeof `${123}`);
console.log(typeof `${false}`);
console.log(typeof `${null}`);
console.log(typeof `${undefined}`);

console.log("//==============================================");

// ─────────────────────────────────────────────
// SECTION 1 — COMPARISON OPERATORS
// Compare two values.
// The result is always true or false.
// ─────────────────────────────────────────────

console.log('--- Comparison Operators ---');

console.log(5 > 3);    // Greater than
console.log(5 < 3);    // Less than
console.log(5 >= 3);   // Greater than or equal to
console.log(5 <= 3);   // Less than or equal to
console.log(5 == 3);   // Loose equality
console.log(5 != 3);   // Loose inequality

// Equality Operators
// ==  Compare values only.
// === Compare value and data type.

console.log(5 === 5);     // Same value and type
console.log(5 === '5');   // Different data types
console.log(5 !== '5');   // Not equal (strict)

// == (Loose Equality)
// JavaScript changes the data type if needed.

console.log(5 == '5');
console.log(true == 1);
console.log(false == 0);

// != (Loose Inequality)

console.log(5 != '5');
console.log(5 != 10);

// === (Strict Equality)
// Values and data types must both match.

console.log(5 === 5);
console.log(5 === '5');
console.log(true === 1);

// !== (Strict Inequality)

console.log(5 !== '5');
console.log(5 !== 5);
console.log(false !== 0);

// Best practice:
// Use === and !== to avoid unexpected results.

console.log("//==============================================");

// ─────────────────────────────────────────────
// SECTION 2 — TRUTHY & FALSY VALUES
// Every value is either truthy or falsy.
// ─────────────────────────────────────────────

console.log('\n--- Truthy & Falsy ---');

// Falsy values:
// false, 0, "", null, undefined, NaN

// Everything else is truthy.

if (false) {
    console.log('This will not run.');
} else {
    console.log('Else block runs because false is falsy.');
}

if (true) {
    console.log('This runs because true is truthy.');
}

// 5 is truthy, so this runs.
const cartQty = 5;

if (cartQty) {
    console.log('You have items in your cart.');
} else {
    console.log('Your cart is empty.');
}

// ! reverses true and false.

console.log(!0);          // true
console.log('text' / 5);  // NaN
console.log(undefined);

console.log("//==============================================");

// ─────────────────────────────────────────────
// SECTION 3 — TERNARY OPERATOR
// Short way to write if...else.
// condition ? trueValue : falseValue
// ─────────────────────────────────────────────

console.log('\n--- Ternary Operator ---');

// ── Ternary Operator ──────────────────────────
// A shorter way to write an if...else statement.

const result = true ? 'truthy' : 'falsy';
console.log(result);

const result1 = 0 ? 'truthy' : 'falsy';
console.log(result1);

// Traditional (Long Form) Equivalent:

// let result;
// if (true) {
//     result = 'truthy';
// } else {
//     result = 'falsy';
// }

// let result1;
// if (0) {
//     result1 = 'truthy';
// } else {
//     result1 = 'falsy';
// }

console.log("//==============================================");

// ─────────────────────────────────────────────
// SECTION 4 — LOGICAL OPERATORS
// && AND
// || OR
// !  NOT
// ─────────────────────────────────────────────

console.log('\n--- Logical Operators ---');

// AND (&&)
// Both conditions must be true.

false && console.log('This will not run.');

const message = false && 'Yellow';
console.log(message);

// OR (||)
// Returns the first truthy value.

const currency = undefined || 'EUR' || 'GBP';
console.log(currency);

// ! (NOT)
// Reverses a boolean value.

console.log("//==============================================");

// ─────────────────────────────────────────────
// SECTION 5 — CONDITIONAL STATEMENTS
// if, else if, else
// ─────────────────────────────────────────────

console.log('\n--- Conditionals ---');

const age = 18;
const isPermitted = true;

// Both conditions must be true.
if (age >= 16 && isPermitted) {
    console.log('You are allowed to drive.');
} else {
    console.log('You cannot drive.');
}

// Only one condition needs to be true.
if (age <= 16 || isPermitted) {
    console.log('At least one condition is true.');
} else {
    console.log('Both conditions are false.');
}

console.log("//==============================================");

// ─────────────────────────────────────────────
// SECTION 6 — PRACTICAL EXAMPLE
// Display a greeting based on the current time.
// ─────────────────────────────────────────────

console.log('\n--- Time-based Greeting ---');

const hours = new Date().getHours();

if (hours >= 6 && hours < 12) {
    console.log('Good morning!');
} else if (hours >= 12 && hours < 18) {
    console.log('Good afternoon!');
} else {
    console.log('Good evening!');
}