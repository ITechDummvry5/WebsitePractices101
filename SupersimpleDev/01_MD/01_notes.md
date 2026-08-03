# SuperSimpleDev — JavaScript Notes (Rewritten)
> Lessons rewritten to be clearer and easier to follow.

---

## Lesson 1 — JavaScript Basics

- JavaScript is a language you use to **give instructions to a computer**.
- You write code, and the computer follows it step by step.
- You can run and test your code instantly using the browser **Console**.
- **Syntax** = the grammar rules for how JavaScript must be written.

---

## Lesson 2 — Numbers & Math

### Basic Math
```js
console.log(10.90 * 2 + 20.95);   // Basic math expression
console.log(jsTotal + 4.99);      // Adding a shipping fee
```

### Order of Operations
JavaScript always follows the same order — multiply/divide first, then add/subtract:

| Priority | Operators | Direction    |
|----------|-----------|--------------|
| 1st      | `*` `/`   | Left → Right |
| 2nd      | `+` `-`   | Left → Right |

```js
2 * 3 / 5   // (2 * 3) / 5 = 1.2
2 + 4 - 5   // (2 + 4) - 5 = 1
```

**⚠️ Common mistake:**
```js
20.95 + 7.99 * 2   // multiplication runs first → 20.95 + 15.98 = 36.93
```
**Fix:** use `()` when you want addition to happen first:
```js
(20.95 + 7.99) * 2  // 28.94 * 2 = 57.88 ✅
```

### Integers vs Floats

| Type                   | Examples               |
|------------------------|------------------------|
| Integer (whole number) | `2`, `3`, `99`         |
| Float (has a decimal)  | `2.2`, `0.1`, `3.99`   |

> **Computers can't store floats perfectly.** This can cause tiny calculation errors.

**Fix:** count in the smallest unit (e.g. **cents** instead of dollars):
```js
// Risky:  0.1 + 0.2  → 0.30000000000000004
// Safe:   10 + 20    → 30  (then divide by 100 to display it)
```

### Rounding
```js
Math.round(2.2);  // → 2
Math.round(2.8);  // → 3
```

---

## Lesson 3 — Strings

### What Is a String?
A string is just **text**. It's a different type of value than a number.
```js
typeof 2        // 'number'
typeof 'hello'  // 'string'
```

### 4 Ways to Create a String

| Type             | Syntax                         | When to Use                          |
|-------------------|-------------------------------|--------------------------------------|
| Single quotes     | `'hello'`                     | Default choice                       |
| Double quotes     | `"hello"`                     | When the text contains a `'`         |
| Escape character  | `\'`, `\"`, `\n`, `\t`, `\\`   | To include special characters       |
| Template string   | `` `hello` ``                 | For interpolation or multi-line text |

### Concatenation — Joining Strings
```js
'Hello' + 'World'   // 'HelloWorld'
'Hello' + 2         // 'Hello2'  (the number auto-converts to text)
```
> This automatic switch is called **Type Coercion**.

### Interpolation — Inserting Values Into a String
```js
const name = 'Charles';
const age = 14;
`My name is ${name} and I am ${age} years old.`
// 'My name is Charles and I am 14 years old.'
```
Template strings (backticks + `${}`) let you drop any value or expression straight into text.

### Multi-line Strings
```js
const message = `Line 1
Line 2
Line 3`;
```
> ⚠️ HTML ignores line breaks by default.

### Common Pitfall
```js
const price = '$' + 20.95 + 7.99;   // '$20.957.99'  ❌ Wrong
const price = '$' + (20.95 + 7.99); // '$28.94'      ✅ Correct
```
**Why:** once a string touches `+`, everything after just gets glued on as text. Use `()` to force the math to happen first.

### Key Terminology

| Term               | Meaning                                               |
|--------------------|-------------------------------------------------------|
| **String**         | Text value                                            |
| **Concatenation**  | Joining strings with `+`                              |
| **Type Coercion**  | Automatic conversion between types                    |
| **Interpolation**  | Inserting a value into a string via `${}`             |
| **Character**      | A single letter, number, symbol, or escape character  |

---

## Lesson 4 — Variables

### What Is a Variable?
A **variable** is a container that stores a value (a number, a string, etc.). You can use it anywhere a plain value would go.

### Creating a Variable
```js
let v2 = 2;
```

| Part   | Meaning                                     |
|--------|----------------------------------------------|
| `let`  | Creates a new variable (or use `const`)      |
| `v2`   | The variable's name                          |
| `=`    | Assigns a value                              |
| `2`    | The value being stored                       |
| `;`    | Ends the statement                           |

### Naming Rules

| Rule                               | Example                                           |
|------------------------------------|---------------------------------------------------|
| ❌ Can't use reserved words        | `let let = 3;`                                    |
| ❌ Can't start with a number       | `let 2name = 3;`                                  |
| ❌ Can't use special characters    | `let !@# = 2;`                                    |
| ✅ `$` and `_` are allowed         | `let $name = 'Charles';` / `let _age = 14;`       |

### Re-assignment Rules

| Rule                                           | Example                                |
|----------------------------------------------- |----------------------------------------|
| ✅ Must be declared first                     | `let score = 50;`                      |
| ✅ Re-assign using just the name              | `score = 100;`                         |
| ❌ Don't use `let` again                      | `let score = 100;`                     |
| ❌ Don't use `const` again                    | `const score = 100;`                   |
| ❌ Can't re-assign something never declared   | `score = 100; // Error`                |
| ✅ The new value replaces the old one         | `score = 100; // score is now 100`     |

### Re-assigning Multiple Times
A `let` variable can be re-assigned as many times as needed. Each new assignment replaces the previous value — it can be a number, text, a calculation result, or a combined string. This lets a variable always hold the latest, most current value as your program runs.

### Assigning vs Re-assigning
```js
let score = 50;    // Assigning — the first value
score = 100;       // Re-assigning — changing the value
```

### `let` vs `const` vs `var`

| Keyword  | Can Re-assign? | Notes                                                     |
|----------|-----------------|----------------------------------------------------------|
| `let`    | ✅ Yes          | Use for values that change                               |
| `const`  | ❌ No           | Use when the value never changes                         |
| `var`    | ✅ Yes          | Old way — function-scoped, can behave unexpectedly       |

---

## Lesson 5 — Logical Operators & Booleans

### What Is a Boolean?
A Boolean is a value with only **two possible states**:
1. `true`
2. `false`

### What's the Point of Booleans?
A Boolean value represents whether something **is** or **isn't** true.

### Template Literals Always Produce Strings
Anything inside a template literal `${...}` is converted to a string — no matter what type it originally was.
```js
console.log(typeof `${123}`);        // string
console.log(typeof `${false}`);      // string
console.log(typeof `${null}`);       // string
console.log(typeof `${undefined}`);  // string

const name = "Charles";
const templateString = `Hello ${name} Template String With Interpolation Method`;
console.log(typeof templateString);  // string
```

### Strategy for Writing JavaScript
1. **Plan the steps** → this plan is called an **Algorithm**.
2. **Turn the steps into code** → this is **implementing** the algorithm.

### Truthy and Falsy Values

| Category    | Examples                                              |
|--------------|------------------------------------------------------|
| **Truthy**   | `1`, `'hello'`, `[]`, `{}`, any non-zero number      |
| **Falsy**    | `0`, `''`, `null`, `undefined`, `NaN`                |

```js
cartQty = 5;
cartQty > 0    // true (truthy)

cartQty = 0;
cartQty > 0    // false (falsy)
```

### 3 Shortcut Operators for `if` Statements

**1. Ternary Operator `?`** — shortcut for `if / else`:
```js
condition ? valueIfTrue : valueIfFalse;

const label = age >= 18 ? 'Adult' : 'Minor';
```

**2. Guard Operator `&&` (AND)** — stops early if the left side is falsy:
```js
false && value2   // stops immediately, returns false

isLoggedIn && showDashboard();  // only runs if isLoggedIn is truthy
```

**3. Default Operator `||` (OR)** — stops early if the left side is truthy:
```js
true || value3    // stops immediately, returns true

const name = userInput || 'Guest';  // fallback if userInput is falsy
```

### Summary

| Operator  | Symbol  | Use Case                                 |
|-----------|---------|------------------------------------------|
| Ternary   | `? :`   | Choose between two values                |
| Guard     | `&&`    | Run code only if a condition is true     |
| Default   | `\|\|`  | Provide a fallback value                 |

---

## Lesson 7 — Scope (Review)

### What Is Scope?
**Scope** controls where in your code a variable exists and can be used.

### Block Scope
Anything created inside `{ }` only exists **within** those braces:
```js
if (num > 0 && num <= 1/3) {
  const computerMove = 'rock';   // Only exists inside this block
}

console.log(computerMove);   // ❌ Error — not defined out here
```
> **Key rule:** `let` and `const` variables are block-scoped — they live and die inside the `{ }` where they were created.

---

## Lesson 8 — Objects

### What Is an Object?
An **object** groups multiple related values together.
- **Properties** = the names (keys) that describe the data.
- **Values** = the actual data stored inside those properties.

```js
const anime = {
  protagonist: "Luffy",
  bounty: "3,000,000,000"
};

// PROPERTIES = protagonist, bounty, etc. (the labels)
// VALUES = "Luffy", "3,000,000,000" — note bounty is a STRING here because it's in quotes, not a number
```

### Changing Object Properties
Assign a new value to an existing property:
```js
anime.bounty = "4,000,000,000";
```

### Adding Object Properties
Create a new property by assigning a value to it:
```js
anime.status = "Emperor";
```
### Delete Object Properties
The `delete` keyword is used to removes object properties. not Whole Object it delete only Specific Object Properties
```js
delete anime.status;


