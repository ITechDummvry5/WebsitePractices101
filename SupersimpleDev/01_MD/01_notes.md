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

# Lesson 4 — Variables

## What Is a Variable?
A **variable** is a container that stores a value (a number, a string, etc.). You can use it anywhere a plain value would go.

## Creating a Variable

```js
let v2 = 2;
```

| Part | Meaning |
|------|---------|
| `let` | Creates a new variable (or use `const`) |
| `v2` | The variable's name |
| `=` | Assigns a value |
| `2` | The value being stored |
| `;` | Ends the statement |

---

## Naming Rules

| Rule | Example |
|------|---------|
| ❌ Can't use reserved words | `let let = 3;` |
| ❌ Can't start with a number | `let 2name = 3;` |
| ❌ Can't use special characters | `let !@# = 2;` |
| ✅ `$` and `_` are allowed | `let $name = 'Charles';` / `let _age = 14;` |

### variable names (identifiers)
| Character          | Valid?    | Example         |
| ------------------ | --------- | --------------- |
| `_` (underscore)   | ✅ Valid   | `delivery_time` |
| `$` (dollar sign)  | ✅ Valid   | `$price`        |
| `-` (hyphen/minus) | ❌ Invalid | `delivery-time` |

---

## Re-assignment Rules

| Rule | Example |
|------|---------|
| ✅ Must be declared first | `let score = 50;` |
| ✅ Re-assign using just the name | `score = 100;` |
| ❌ Don't use `let` again | `let score = 100;` |
| ❌ Don't use `const` again | `const score = 100;` |
| ❌ Can't re-assign something never declared | `score = 100; // Error` |
| ✅ The new value replaces the old one | `score = 100; // score is now 100` |

---

## Re-assigning Multiple Times

A `let` variable can be re-assigned as many times as needed. Each new assignment replaces the previous value—it can be a number, text, the result of a calculation, or a combined string. This lets a variable always hold the latest value as your program runs.

```js
let score = 50;

score = 75;
score = score + 25;
score = "Winner";

console.log(score); // Winner
```

---

## Assigning vs Re-assigning

```js
let score = 50; // Assigning — the first value

score = 100;    // Re-assigning — changing the value
```

---

## Assignment Shortcuts

When re-assigning a variable based on its current value, JavaScript provides **assignment shortcuts**. These are called **compound assignment operators**.

| Shortcut | Same As | Example |
|----------|---------|---------|
| `+=` | `x = x + value` | `score += 10;` |
| `-=` | `x = x - value` | `score -= 5;` |
| `*=` | `x = x * value` | `score *= 2;` |
| `/=` | `x = x / value` | `score /= 4;` |
| `%=` | `x = x % value` | `score %= 3;` |

### Examples

```js
let score = 50;

score += 10; // 60
score -= 20; // 40
score *= 2;  // 80
score /= 4;  // 20
score %= 6;  // 2

console.log(score);
```

### Before vs Shortcut

```js
let coins = 5;

coins = coins + 1; // Long way
coins += 1;        // Shortcut
```

```js
let health = 100;

health = health - 20; // Long way
health -= 20;         // Shortcut
```

---

## Increment and Decrement

When adding or subtracting **1**, JavaScript provides even shorter operators.

| Operator | Same As | Example |
|----------|---------|---------|
| `++` | `x += 1` | `count++;` |
| `--` | `x -= 1` | `count--;` |

### Example

```js
let count = 0;

count++;
count++;
count--;

console.log(count); // 1
```

### Comparison

| Long Way | Shortcut | Shortest |
|----------|----------|----------|
| `count = count + 1;` | `count += 1;` | `count++;` |
| `count = count - 1;` | `count -= 1;` | `count--;` |

> **Note:** `++` and `--` only work for increasing or decreasing a value by **1**.

---

## `let` vs `const` vs `var`

| Keyword | Can Re-assign? | Notes |
|---------|-----------------|-------|
| `let` | ✅ Yes | Use for values that change. |
| `const` | ❌ No | Use when the value never changes. |
| `var` | ✅ Yes | Older way of declaring variables. It is function-scoped and can behave unexpectedly, so `let` and `const` are preferred. |

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
- **Property Values** = the actual data stored inside those properties.

```js
const anime = {
  protagonist: "Luffy",
  bounty: 3000000000
};

// PROPERTIES = protagonist, bounty
// PROPERTY VALUES = "Luffy", 3000000000
```
### Dot Notation
`Dot Notation` is a way to access or change object properties using a dot (`.`) followed by the property name.

Example:

```js
anime.protagonist;
```

### Changing or Reassign Property Values
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
The `delete` keyword is used to remove a specific object property. It does not delete the whole object.

```js
delete anime.status;
```
//Alternative Using Access Object

### Bracket Notation
`Bracket Notation` is an alternative way to access or change object properties using brackets (`[]`). The property name is usually written as a string using quotes (`""` or `''`).
It is useful when the property name contains spaces, special characters, or when using a variable as a property name.

### Access Property
Access an object property using brackets:

```js
anime["protagonist"];
```

### Changing or Reassign Property Values
Assign a new value to an existing property using brackets:

```js
anime["bounty"] = "4,000,000,000";
```

### Adding Object Properties
Create a new property by assigning a value to it using brackets:

```js
anime["status"] = "Emperor";
```

### Delete Object Properties
The `delete` keyword removes a specific object property using brackets. It does not delete the whole object.

```js
delete anime["status"];
```

### Dot Notation Vs Bracket Notation

| Feature                    | Dot Notation                                    | Bracket Notation                                         |
|----------------------------|---------------------------- --------------------|----------------------------------------------------------|
| Syntax                     | Uses a dot (`.`) followed by the property name. | Uses brackets (`[]`) with the property name as a string. |
| Easy Use                   | Simple and commonly used.                       | More flexible when needed.                               |
| Property Names             | Works with normal property names.               | Can use spaces, special characters, or variables.        |
| Expressions / Calculations |  Cannot evaluate expressions or calculations.   |  Can evaluate expressions or calculations inside `[]`.   |

### Combining Dot Notation and Bracket Notation
`Dot Notation` and `Bracket Notation` can be used together in the same object. They both access object properties, but the correct method depends on the property name.

- Normal property names → Dot Notation or Bracket Notation
- Property names with spaces or special characters → Bracket Notation only

Example:

```js
console.log(anime.male);          // ✅ Dot Notation
console.log(anime["crew name"]);  // ✅ Bracket Notation
console.log(anime["!Crew!"]);     // ✅ Bracket Notation
```

### Nested Object
A **nested object** is an object stored inside another object. It allows you to organize related data into groups.

You can access nested properties using **dot notation**, **bracket notation**, or a combination of both.

```javascript
const anime = {
  title: "One Piece",
  character: {
    name: "Luffy",
    age: 19
  }
};

console.log(anime.character.name);        // Dot notation
console.log(anime["character"]["name"]);  // Bracket notation
console.log(anime.character["name"]);     // Dot Notation First - Combined notation
console.log(anime["character"].name);     // Bracket First - Combined notation

// Luffy
```
### Functions Inside Objects (Methods)

## What Is a Method?

A `method` is a `function` that lives inside an `object`. Just like a regular function, a method can perform actions or behaviors — but it belongs to a specific object and can work with that object's data.

---

## Three Ways to Define a Method

---

### 1. Method Shorthand

The **method shorthand** is the modern, concise way to define a method. It omits the `function` keyword entirely and is the preferred style in ES6+.

**Syntax:**

```javascript
const objectName = {
   methodName() {
      // code here
   }
};
```

**Example:**

```javascript
const detective = {
   solveCase() {
      console.log('Case solved!');
   }
};

detective.solveCase(); // Output: Case solved!
```

**When to use:** Preferred in modern JavaScript for clean, readable code.

---

### 2. Traditional Method — Anonymous Function

An **anonymous function** is a `function` that has **no name**. It is assigned directly to an object property using the `function` keyword followed by `()`.

**Syntax:**

```javascript
const objectName = {
   methodName: function() {
      // code here
   }
};
```

**Example:**

```javascript
const detective = {
   solveCase: function() {
      console.log('Case solved!');
   }
};

detective.solveCase(); // Output: Case solved!
```

**When to use:** Common in older JavaScript code (pre-ES6). Still valid and works identically to method shorthand.

---

### 3. Traditional Method — Named Function

A **named function** is a `function` that has its own identifier after the `function` keyword. The name is **optional** and is mainly used for **debugging** or **recursion** — it is not accessible from outside the object.

**Syntax:**

```javascript
const objectName = {
   methodName: function FunctionName() {
      // code here
   }
};
```

**Example:**

```javascript
const detective = {
   fun: function DetectiveFunction() {
      console.log('Detective is on the case!');
   }
};

detective.fun(); // Output: Detective is on the case!
// DetectiveFunction();  ❌ This would throw a ReferenceError — the name is not accessible outside
```

**When to use:** Useful when you need the function to call itself (recursion) or when you want a meaningful name to appear in stack traces during debugging.

---

## The 3 Parts of a Method Definition

Using `fun: function DetectiveFunction() {}` as the example:

| Part | Example | Description |
|---|---|---|
| **Property Name** | `fun` | The key used to access and call the method on the object. Can be any valid identifier. |
| **`function` keyword** | `function` or `function()` | Declares the function. Use `function` when providing a name; use `function()` for anonymous functions. |
| **Function Name** *(optional)* | `DetectiveFunction` | An optional internal identifier. Useful for debugging and recursion, but not accessible outside the object. |

**Full example showing all 3 parts:**

```javascript
const detective = {
//  ┌── 1. Property Name
//  │        ┌── 2. function keyword
//  │        │         ┌── 3. Function Name (optional)
   fun: function DetectiveFunction() {
      console.log('Detective is on the case!');
   }
};

detective.fun(); // ✅ Called using the property name
```

---

## Quick Comparison

| Style | Syntax | Has Name | ES Version |
|---|---|---|---|
| Method Shorthand | `solve() {}` | No | ES6+ |
| Anonymous Function | `solve: function() {}` | No | ES5+ |
| Named Function | `solve: function SolveFn() {}` | Yes (internal) | ES5+ |

---

### JSON  or  JAVASCRIPT OBJECT NOTATION
- a Synax 
- similar to Javascript Object
- but has less features 
- use to Store data 
- use to send  data between computers

### JAVASCRIPT VS JSON 

| Feature            | JavaScript                                                    | JSON                                                              |
| ------------------ | ------------------------------------------------------------- | ----------------------------------------------------------------- |
| **String**         | `'single'` or `"double"` quotes allowed                       | `"double"` quotes only                                            |
| **Keys**           | `{ name: "John" }` (quotes optional for valid identifiers)    | `{ "name": "John" }` (quotes required)                            |
| **Trailing comma** | ✅ Allowed                                                   | ❌ Not allowed                                                  |
| **Functions**      | ✅ Allowed                                                   | ❌ Not allowed                                                  |
| **Comments**       | ✅ Allowed (`//` or `/* */`)                                 | ❌ Not allowed                                                  |
| **Data types**     | Supports more types (e.g., `undefined`, `function`, `Symbol`) | Supports only: string, number, boolean, object, array, and `null` |
| **Purpose**        | Programming language used to create logic and applications    | Data format used for storing and exchanging data                  |

### COMPARISON 
```javascript
const employee = {
  id: 101,
  name: "John Smith",
  skills: ["JavaScript", "JSON"],
  active: true,
  salary: 10000,
  greet() {
    return "Welcome!";
  }
};

// Json data
{
  "id": 101,
  "name": "John Smith",
  "skills": [
    "JavaScript",
    "JSON"
  ],
  "active": true
}