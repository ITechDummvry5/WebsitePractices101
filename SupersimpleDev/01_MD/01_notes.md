This File - `notes.md` — Longer explanations, code examples, comparisons, and gotchas.

# SuperSimpleDev — JavaScript Notes (Rewritten)
> Lessons rewritten to be clearer and easier to follow.

---

## Lesson 1 — JavaScript Basics

- JavaScript is a language you use to `give instructions to a computer`.
- You write code, and the computer follows it step by step.
- You can run and test your code instantly using the browser `Console`.
- `Syntax` = the grammar rules for how JavaScript must be written.

---

## Lesson 2 — Numbers & Math

### Basic Math
```javascript
console.log(10.90 * 2 + 20.95);   // Basic math expression
console.log(jsTotal + 4.99);      // Adding a shipping fee
```

### Order of Operations
JavaScript always follows the same order — multiply/divide first, then add/subtract:

| Priority | Operators | Direction    |
|----------|-----------|--------------|
| 1st      | `*` `/`   | Left → Right |
| 2nd      | `+` `-`   | Left → Right |

```javascript
2 * 3 / 5   // (2 * 3) / 5 = 1.2
2 + 4 - 5   // (2 + 4) - 5 = 1
```

`⚠️ Common mistake:`
```javascript
20.95 + 7.99 * 2   // multiplication runs first → 20.95 + 15.98 = 36.93
```
`Fix:` use `()` when you want addition to happen first:
```javascript
(20.95 + 7.99) * 2  // 28.94 * 2 = 57.88 ✅
```

### Integers vs Floats

| Type                   | Examples               |
|------------------------|------------------------|
| Integer (whole number) | `2`, `3`, `99`         |
| Float (has a decimal)  | `2.2`, `0.1`, `3.99`   |

> `Computers can't store floats perfectly.` This can cause tiny calculation errors.

`Fix:` count in the smallest unit (e.g. `cents` instead of dollars):
```javascript
// Risky:  0.1 + 0.2  → 0.30000000000000004
// Safe:   10 + 20    → 30  (then divide by 100 to display it)
```

### Rounding
```javascript
Math.round(2.2);  // → 2
Math.round(2.8);  // → 3
```

---

## Lesson 3 — Strings

```javascript
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
```javascript
'Hello' + 'World'   // 'HelloWorld'
'Hello' + 2         // 'Hello2'  (the number auto-converts to text)
```
> This automatic switch is called `Type Coercion`.

### Interpolation — Inserting Values Into a String
```javascript
const name = 'Charles';
const age = 14;
`My name is ${name} and I am ${age} years old.`
// 'My name is Charles and I am 14 years old.'
```
Template strings (backticks + `${}`) let you drop any value or expression straight into text.

### Multi-line Strings
```javascript
const message = `Line 1
Line 2
Line 3`;
```
> ⚠️ HTML ignores line breaks by default.

### Common Pitfall
```javascript
const price = '$' + 20.95 + 7.99;   // '$20.957.99'  ❌ Wrong
const price = '$' + (20.95 + 7.99); // '$28.94'      ✅ Correct
```
`Why:` once a string touches `+`, everything after just gets glued on as text. Use `()` to force the math to happen first.

### Key Terminology

| Term             | Meaning                                               |
|------------------|-------------------------------------------------------|
| `String`         | Text value                                            |
| `Concatenation`  | Joining strings with `+`                              |
| `Type Coercion`  | Automatic conversion between types                    |
| `Interpolation`  | Inserting a value into a string via `${}`             |
| `Character`      | A single letter, number, symbol, or escape character  |

---

# Lesson 4 — Variables

Creating a Variable
```javascript
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

```javascript
let score = 50;

score = 75;
score = score + 25;
score = "Winner";

console.log(score); // Winner
```

---

## Assigning vs Re-assigning

```javascript
let score = 50; // Assigning — the first value

score = 100;    // Re-assigning — changing the value
```

---

## Assignment Shortcuts

When re-assigning a variable based on its current value, JavaScript provides `assignment shortcuts`. These are called `compound assignment operators`.

| Shortcut | Same As | Example |
|----------|---------|---------|
| `+=` | `x = x + value` | `score += 10;` |
| `-=` | `x = x - value` | `score -= 5;` |
| `*=` | `x = x * value` | `score *= 2;` |
| `/=` | `x = x / value` | `score /= 4;` |
| `%=` | `x = x % value` | `score %= 3;` |

### Examples

```javascript
let score = 50;

score += 10; // 60
score -= 20; // 40
score *= 2;  // 80
score /= 4;  // 20
score %= 6;  // 2

console.log(score);
```

### Before vs Shortcut

```javascript
let coins = 5;

coins = coins + 1; // Long way
coins += 1;        // Shortcut
```

```javascript
let health = 100;

health = health - 20; // Long way
health -= 20;         // Shortcut
```

---

## Increment and Decrement

When adding or subtracting `1`, JavaScript provides even shorter operators.

| Operator | Same As | Example |
|----------|---------|---------|
| `++` | `x += 1` | `count++;` |
| `--` | `x -= 1` | `count--;` |

### Example

```javascript
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

> `Note:` `++` and `--` only work for increasing or decreasing a value by `1`.

---

## `let` vs `const` vs `var`

| Keyword | Can Re-assign? | Notes |
|---------|-----------------|-------|
| `let` | ✅ Yes | Use for values that change. |
| `const` | ❌ No | Use when the value never changes. |
| `var` | ✅ Yes | Older way of declaring variables. It is function-scoped and can behave unexpectedly, so `let` and `const` are preferred. |

---


## Lesson 5 — Logical Operators & Booleans

What's the Point of Booleans?
A Boolean value represents whether something `is` or `isn't` true.

### Template Literals Always Produce Strings
Anything inside a template literal `${...}` is converted to a string — no matter what type it originally was.
```javascript
console.log(typeof `${123}`);        // string
console.log(typeof `${false}`);      // string
console.log(typeof `${null}`);       // string
console.log(typeof `${undefined}`);  // string

const name = "Charles";
const templateString = `Hello ${name} Template String With Interpolation Method`;
console.log(typeof templateString);  // string
```

### Strategy for Writing JavaScript
1. `Plan the steps` → this plan is called an `Algorithm`.
2. `Turn the steps into code` → this is `implementing` the algorithm.

### Truthy and Falsy Values

| Category    | Examples                                              |
|--------------|------------------------------------------------------|
| `Truthy`   | `1`, `'hello'`, `[]`, `{}`, any non-zero number      |
| `Falsy`    | `0`, `''`, `null`, `undefined`, `NaN`                |

```javascript
cartQty = 5;
cartQty > 0    // true (truthy)

cartQty = 0;
cartQty > 0    // false (falsy)
```

### 3 Shortcut Operators for `if` Statements

`1. Ternary Operator `?`` — shortcut for `if / else`:
```javascript
condition ? valueIfTrue : valueIfFalse;

const label = age >= 18 ? 'Adult' : 'Minor';
```

`2. Guard Operator `&&` (AND)` — stops early if the left side is falsy:
```javascript
false && value2   // stops immediately, returns false

isLoggedIn && showDashboard();  // only runs if isLoggedIn is truthy
```

`3. Default Operator `||` (OR)` — stops early if the left side is truthy:
```javascript
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

## Lesson 6 — Function
| Term                     | Easy meaning           | Example                   |
| ------------------------ | ---------------------- | ------------------------- |
| `Function declaration` | Create a function      | `function greet() {}`     |
| `Function name`        | Function's name        | `greet`                   |
| `Parameter`            | Input placeholder      | `function greet(name) {}` |
| `Argument`             | Actual input value     | `greet("Conan")`          |
| `Function body`        | Code the function runs | `{ return "Hello"; }`     |
| `Return`               | Output from function   | `return "Hello";`         |
| `Function call`        | Run the function       | `greet("Conan")`          |

```javascript
function greet(name) {
    return `Hello ${name}`;
}
console.log(greet("Conan"));

// Overview 
function greet(name) { return `Hello ${name}`; }
└──────────┬───────┘        │      │
   function declaration     │      └── parameter
                            │
                        (whole { ... } is the) function body

function greet(name) {
         │      │
         │      └── parameter
         └── function name

greet("Conan")
       │
       └── argument

return `Hello ${name}`;
       │
       └── return value

greet("Conan")
│
└── function call
```

### Block Scope
Anything created inside `{ }` only exists `within` those braces:
```javascript
if (num > 0 && num <= 1/3) {
  const computerMove = 'rock';   // Only exists inside this block
}

console.log(computerMove);   // ❌ Error — not defined out here
```
> `Key rule:` `let` and `const` variables are block-scoped — they live and die inside the `{ }` where they were created.

---

## Lesson 7 — Objects

### Object
<!-- Important Note: Objects are References -->
An `object` stores related data using `properties` (keys) and `values`.

```javascript
const anime = {
  name: "Luffy",
  bounty: 3000000000,
  character: {
    name: "Nami"
  }
};
```

### Property Access & Actions

| Action | Dot Notation              | Bracket Notation                | Use                                   |
| ------ | -------------------------- | ------------------------------ | --------------------------------------|
| Access | `anime.name`               | `anime["name"]`                | Normal property names                 |
| Change | `anime.name = "Zoro"`      | `anime["name"] = "Zoro"`       | Spaces, special characters, variables |
| Add    | `anime.status = "Yonko"`   | `anime["status"] = "Yonko"`    | (same as above)                       |
| Delete | `delete anime.status`      | `delete anime["status"]`       | (same as above)                       |

### Nested Object
An object inside another object. Access using dot, bracket, or a combination:

```javascript
anime.character.name;         // dot
anime["character"]["name"];   // bracket
anime.character["name"];      // combined
```

---

### Defining Methods (3 ways)

| Style | Syntax | When to use |
| ----- | ------ | ------------ |
| Method Shorthand (ES6) | `solve() {}` | Preferred in modern JS — clean and readable |
| Anonymous Function Expression | `investigate: function() {}` | Common in pre-ES6 code; still valid |
| Named Function Expression | `report: function DetectiveReport() {}` | Useful for recursion or clearer stack traces during debugging |

```javascript
const detective = {
  solve() {                              // 1. Method Shorthand
    console.log("Solving the case!");
  },
  investigate: function() {              // 2. Anonymous Function
    console.log("Investigating clues!");
  },
  report: function DetectiveReport() {   // 3. Named Function
    console.log("Case report completed!");
  }
};

detective.solve();
detective.investigate();
detective.report();
```

The 3 parts of a named function expression:
```javascript
const detective = {
//  ┌── 1. Property Name
//  │        ┌── 2. function keyword
//  │        │         ┌── 3. Function Name (optional)
   fun: function DetectiveFunction() {
      console.log('Detective is on the case!');
   }
};
```

---

### JSON
A text-based data format (similar to but simpler than a JS object) used to store and send data between computers.

| Feature        | JavaScript                                                 | JSON                                                                   |
| --------------- | ------------------------------------------------------------ | -------------------------------------------------------------------- |
| Strings        | `'single'` or `"double"` quotes                              | `"double"` quotes only                                                |
| Keys           | Quotes optional for valid identifiers                        | Quotes required                                                       |
| Trailing comma | Allowed                                                       | Not allowed                                                           |
| Functions      | Allowed                                                       | Not allowed                                                           |
| Comments       | Allowed (`//`, `/* */`)                                       | Not allowed                                                           |
| Data types     | Supports `undefined`, `function`, `Symbol`, etc.              | Only `string`, `number`, `boolean`, `object`, `array`, `null`        |
| Purpose        | Programming language for logic and applications               | Data format for storing/exchanging data                              |

**Local Storage only supports strings** — use `JSON.stringify()` to store an object and `JSON.parse()` to retrieve it:

```javascript
const user = { name: "Charles", age: 14 };

localStorage.setItem("user", JSON.stringify(user));      // store
const savedUser = JSON.parse(localStorage.getItem("user")); // retrieve

console.log(savedUser);
```

---

### Auto-Boxing
Primitive values have no properties or methods of their own. When you access a property/method on one, JS temporarily wraps it in its corresponding wrapper object, then discards the wrapper.

```javascript
"hello".length;    // temporarily wrapped as a String object
(123).toString();  // temporarily wrapped as a Number object
true.toString();   // temporarily wrapped as a Boolean object
```

| Primitive | Wrapper Object | Example                   | What Happens                                                    |
| :-------- | :------------- | :------------------------ | :-------------------------------------------------------------- |
| `string`  | `String`       | `"hi".length`             | Temporarily wrapped in a `String` object to access `.length`    |
| `number`  | `Number`       | `(123).toString()`        | Temporarily wrapped in a `Number` object to call `.toString()`  |
| `boolean` | `Boolean`      | `true.toString()`         | Temporarily wrapped in a `Boolean` object to call `.toString()` |
| `bigint`  | `BigInt`       | `(10n).toString()`        | Temporarily wrapped in a `BigInt` object to call `.toString()`  |
| `symbol`  | `Symbol`       | `Symbol("id").toString()` | Temporarily wrapped in a `Symbol` object to call `.toString()`  |


> `null` and `undefined` can't be auto-boxed — accessing a property on them throws a `TypeError`.

---

### Class vs Object vs Method vs Function

```text
Class → creates → Object → has → Method → performs → Action
```

- **Class** — blueprint for creating objects with shared data/methods
- **Object** — stores related data and behavior
- **Method** — a function that belongs to an object or class
- **Function** — performs an action or task

```javascript
class Person {
  greet() {
    console.log("Hello!");
  }
}

const person = new Person();
person.greet();
// Person = class, person = object, greet() = method, console.log(...) = action
```

---

### Primitive vs Non-Primitive
- **Primitive** — the variable holds the value directly.
- **Non-Primitive (Object)** — the variable holds a *reference* to the object.

```javascript
// Primitive: copying makes an independent value
let a = 10;
let b = a;
b = 20;
console.log(a, b); // 10 20

// Object: copying copies the reference, not the object
let person1 = { name: "John" };
let person2 = person1;
person2.name = "Mike";
console.log(person1.name, person2.name); // "Mike" "Mike"
```

## Lesson 8 – DOM

The `document` object represents/models the webpage.
DOM = `Document Object Model`

### Syntax Rules in DOM — Same as Objects
* DOM uses **object.property** and **bracket notation** to access properties.
* Examples:

  * `document.body` → `object.property`
  * `document["body"]` → `object["property"]`
  * `document[propertyName]` → property name stored in a variable

### DOM Methods
The `document` object also has **methods**.
`document.querySelector('button')` → Finds the first `<button>` element.

Yes. I’d add a **DOM Access** section to your notes, because these are important ways to access DOM elements.

### DOM Access Methods
These methods are used to **find/access HTML elements** in the DOM.

### Quick Reference
| Method                     | Access By    | Example                                   |
| -------------------------- | ------------ | ----------------------------------------- |
| `querySelector()`          | CSS selector | `document.querySelector(".btn")`          |
| `querySelectorAll()`       | CSS selector | `document.querySelectorAll(".btn")`       |
| `getElementById()`         | ID           | `document.getElementById("btn")`          |
| `getElementsByClassName()` | Class        | `document.getElementsByClassName("btn")`  |
| `getElementsByTagName()`   | Tag          | `document.getElementsByTagName("button")` |

**Easy way to remember:**
* `#btn` → **ID**
* `.btn` → **Class**
* `button` → **Tag**
* `querySelector()` → **first match**
* `querySelectorAll()` → **all matches**

### Object Method vs DOM Method

| Type          | Example                            | Purpose                         |
| ------------- | ---------------------------------- | ------------------------------- |
| Object Method | `user.login()`                     | Performs an action on an object |
| DOM Method    | `document.querySelector('button')` | Finds an element in the webpage |

**Basic idea:**
`object.method()` → performs an action
`document.method()` → performs an action on the webpage

### DOM Properties And Method


