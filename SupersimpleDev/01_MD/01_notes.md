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

## Lesson 7 — Function
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

## Lesson 8 — Objects

### Object
<!-- Important Note : Objects are References -->
An `object` stores related data using 
`properties` (keys) =  [protagonist, bounty]
`values`            =  ["Luffy", 3000000000].

```javascript
const anime = {
  name: "Luffy",
  bounty: 3000000000
  character : {  
   name : Nami
  }
};
```

### Property Access

| Type             | Syntax          | Use                                   |
| ---------------- | --------------- | ------------------------------------- |
| Dot Notation     | `anime.name`    | Normal property names                 |
| Bracket Notation | `anime["name"]` | Spaces, special characters, variables |

### Object Actions

| Action | Dot                      | Bracket                     |
| ------ | ------------------------ | --------------------------- |
| Access | `anime.name`             | `anime["name"]`             |
| Change | `anime.name = "Zoro"`    | `anime["name"] = "Zoro"`    |
| Add    | `anime.status = "Yonko"` | `anime["status"] = "Yonko"` |
| Delete | `delete anime.status`    | `delete anime["status"]`    |


### Nested Object
An object inside another object.

Access using:

* Dot →      `anime.character.name`
* Bracket →  `anime["character"]["name"]`
* Combined → `anime.character["name"]`
```
```

## Three Ways to Define a Method Object

### 1. Method Shorthand
`When to use:` Preferred in modern JavaScript for clean, readable code.

### 2. Traditional Method — Anonymous Function
`When to use:` Common in older JavaScript code (pre-ES6). Still valid and works identically to method shorthand.

### 3. Traditional Method — Named Function
`When to use:` Useful when you need the function to call itself (recursion) or when you want a meaningful name to appear in stack traces during debugging.

```javascript
const detective = {
  // 1.
  solve() {
    console.log("Solving the case!");
  },

  // 2.
  investigate: function() {
    console.log("Investigating clues!");
  },

  // 3.
  report: function DetectiveReport() {
    console.log("Case report completed!");
  }
};

// Calling methods
detective.solve();         // 1. Method Shorthand
detective.investigate();   // 2. Anonymous Function
detective.report();        // 3. Named Function

```
## The 3 Parts of a Method Definition
| Syntax                          | Name                       | Example                                |
| --------------------------------| -------------------------- | -------------------------------------- |
| `Method Shorthand (ES6)`        | Object method              | `methodName() {}`                      |
| `Anonymous Function Expression` | Function without a name    | `methodName: function() {}`            |
| `Named Function Expression`     | Function with its own name | `methodName: function methodName() {}` |

`Full example showing all 3 parts:`

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

### JSON 
- a Synax 
- similar to Javascript Object
- but has less features 
- use to Store data 
- use to send  data between computers

### JAVASCRIPT VS JSON 
| Feature        | JavaScript                                                    | JSON                                                                   |
|----------------|---------------------------------------------------------------|------------------------------------------------------------------------|
| String         | `'single'` or `"double"` quotes allowed                       | `"double"` quotes only                                                 |
| Keys           | `{ name: "John" }` (quotes optional for valid identifiers)    | `{ "name": "John" }` (quotes required)                                 |
| Trailing comma | Allowed                                                       | Not allowed                                                            |
| Functions      | Allowed                                                       | Not allowed                                                            |
| Comments       | Allowed (`//` or `/* */`)                                     | Not allowed                                                            |
| Data types     | Supports more types (`undefined`, `function`, `Symbol`)       | Supports only `string`, `number`, `boolean`, `object`, `array`, `null` |
| Purpose        | Programming language for creating logic and applications      | Data format for storing and exchanging data                            |

### Local Storage
Only supports `strings`.
Use `JSON.stringify()` to store objects and `JSON.parse()` to retrieve them.

```javascript
const user = {
  name: "Charles",
  age: 14
};
// Store data
localStorage.setItem("user", JSON.stringify(user));
// Get data
const savedUser = JSON.parse(localStorage.getItem("user"));
//Call
console.log(savedUser);

```

### Auto Boxing 
Primitive Values
`Primitive values` do not actually have properties or methods, but JavaScript auto-boxes them temporarily so you can use methods.

```js
"hello".length
(123).toString()
true.toString()
```

`Objects` can have their own properties and methods.
```js
const person = {
  name: "John",
  greet() {}
};
```
// Take Note : Auto Boxing Does not Work In null property or undefined method

### key Difference: Function vs Object vs Class vs Method
`Class` = creates objects with shared data and methods
`Object` = stores data
`Function` = performs actions
`Method` = a function inside an object or class

**Simple relationship:**
`Class` → creates → `Object` → has → `Method` → performs → `Action`

### key Difference : Primitive Difference And Non-Primitive (Object)
Primitive → stores the value
Non-Primitive (Object) → stores a reference to the value



