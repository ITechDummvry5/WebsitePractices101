# SuperSimpleDev — JavaScript Notes
> All lessons combined and organized for easy reference.


## Lesson 1 — JavaScript Basics

### What is JavaScript?
- JavaScript is a way of giving instructions to a computer.
- The computer follows those instructions.
- JavaScript is **case-sensitive** — `Hello` and `hello` are different.

### What is a Programming Language?
- Similar to human languages, but written for computers.
- Commands get translated into instructions the computer can execute.

### What is Syntax?
- Syntax = the rules you must follow when writing code.
- Correct syntax allows the code to be compiled and run without errors.

### Key Examples
```js
alert('Hello');          // Shows a pop-up saying "Hello"
alert('Good Job!');      // Shows a pop-up saying "Good Job!"

document.body.innerHTML = 'hello';  // Modifies the webpage / HTML element
```

### What is `DOMContentLoaded`?
An event that fires when the HTML is **fully loaded and parsed** — but *before* images, videos, and CSS backgrounds finish loading.

```js
document.addEventListener('DOMContentLoaded', function() {
  // Safe to access the DOM here
});
```

**Why use it?**
- JS waits until the HTML is ready
- Prevents errors from trying to access elements that don't exist yet
- Safe DOM access guaranteed

---

## Lesson 2 — Numbers & Math

### Syntax Rules for Numbers
```js
console.log(10.90 * 2 + 20.95);   // Basic math expression
console.log(jsTotal + 4.99);       // Adding a shipping fee
```

### Operator Precedence (Order of Operations)
JavaScript follows standard math rules:

| Priority | Operators | Direction |
|----------|-----------|-----------|
| 1st | `*` `/` | Left → Right |
| 2nd | `+` `-` | Left → Right |

**Same-priority example:**
```js
2 * 3 / 5   // → Left to right: (2 * 3) / 5 = 1.2
2 + 4 - 5   // → Left to right: (2 + 4) - 5 = 1
```

**Problem:** Operator precedence can give unexpected results.  
**Solution:** Use parentheses `( )` to control which part runs first.

```js
// Without brackets — wrong result
20.95 + 7.99 * 2   // → 20.95 + 15.98 = 36.93

// With brackets — correct result
(20.95 + 7.99) * 2  // → 28.94 * 2 = 57.88
```

### Integers vs Floats
| Type | Examples |
|------|---------|
| Integers | `2`, `3`, `99` |
| Floating Point (floats) | `2.2`, `0.1`, `3.99` |

> ⚠️ **Computers cannot store floats perfectly.** This can cause small inaccuracies in calculations.

**Solution:** Count in the smallest unit (e.g., **cents** instead of dollars).
```js
// Instead of: 0.1 + 0.2  → 0.30000000000000004
// Do this:    10 + 20     → 30  (then divide by 100 for display)
```

### Rounding Numbers
```js
Math.round(2.2);  // → 2
Math.round(2.8);  // → 3
```

### Temperature Conversion Formulas
```js
// Celsius → Fahrenheit
fahrenheit = (celsius * 9 / 5) + 32;

// Fahrenheit → Celsius
celsius = (fahrenheit - 32) * 5 / 9;
```

---

## Lesson 3 — Strings

### What is a String?
A string is **text**. Numbers and strings are different types of values.

```js
typeof 2        // → 'number'
typeof 'hello'  // → 'string'
```

### The 4 Ways to Create a String

| Type | Syntax | When to Use |
|------|--------|-------------|
| Single quotes | `'hello'` | ✅ Default (recommended) |
| Double quotes | `"hello"` | Use when the string contains a `'` inside |
| Escape character | `\'`, `\"`, `\n`, `\t`, `\\` | Include special characters inside a string |
| Template string | `` `hello` `` | Use for interpolation or multi-line strings |

### Concatenation — Combining Strings
```js
'Hello' + 'World'   // → 'HelloWorld'
'Hello' + 2         // → 'Hello2'  (number auto-converts to string)
```
> This automatic conversion is called **Type Coercion**.

### Interpolation — Inserting Values into Strings
```js
const name = 'Charles';
const age = 14;
`My name is ${name} and I am ${age} years old.`
// → 'My name is Charles and I am 14 years old.'
```
Template strings use backticks `` ` `` and `${}` to insert any expression directly.

### Multi-line Strings
```js
const message = `Line 1
Line 2
Line 3`;
```
> ⚠️ HTML ignores line breaks by default. Add this CSS to display them correctly:
> ```css
> #element { white-space: pre-line; }
> ```

### Common Pitfall
```js
const price = '$' + 20.95 + 7.99;   // → '$20.957.99'  ❌ Wrong
const price = '$' + (20.95 + 7.99); // → '$28.94'      ✅ Correct
```
**Reason:** Once a string is involved, `+` becomes concatenation. Use `()` to do the math first.

### Key Terminology
| Term | Meaning |
|------|---------|
| **String** | Text value |
| **Concatenation** | Combining strings with `+` |
| **Type Coercion** | Automatic type conversion |
| **Interpolation** | Inserting a value into a string via `${}` |
| **Character** | A single letter, number, symbol, or escape character |

---

## Lesson 4 — HTML, CSS & JS Interaction

### Ways to Handle Click Events (from exercises)

| Method | Description |
|--------|-------------|
| `No0` — Inline `onclick` | Event handler written directly in HTML |
| `No01` — Separate JS function | Same result but cleaner; JS is separated from HTML *(commented out)* |
| `No02` — `addEventListener` | ✅ **Most recommended** — best practice for modern JavaScript |

**Best Practice:**
```js
// ✅ Recommended
document.querySelector('#btn').addEventListener('click', function() {
  // your code here
});
```

---

## Lesson 5 — Variables

### What is a Variable?
A **variable** is a container that stores a value (a number, string, etc.).  
You can use a variable anywhere a plain value is allowed.

### Creating a Variable
```js
let v2 = 2;
```
| Part | Meaning |
|------|---------|
| `let` | Creates a new variable (or use `const`) |
| `v2` | The variable name |
| `=` | Assigns a value |
| `2` | The value being stored |
| `;` | Ends the statement |

### Variable Name Rules
| Rule | Example |
|------|---------|
| ❌ Cannot use reserved words | `let let = 3;` |
| ❌ Cannot start with a number | `let 2name = 3;` |
| ❌ Cannot use special characters | `let !@# = 2;` |
| ✅ `$` and `_` are allowed | `let $name = 'Charles';` / `let _age = 14;` |

### Assigning vs Re-assigning
```js
let score = 50;    // Assigning — giving the variable its first value
score = 100;       // Re-assigning — changing the value
```

**Re-assigning Rules:**
```js
// ✅ Correct re-assign
let age = 10;
age = 15;

// ❌ Wrong — don't use 'let' again on the same variable
let age = 15;

// ❌ Wrong — variable must exist before you can re-assign
score = 100;   // Error if score was never declared
```

### `let` vs `const` vs `var`

| Keyword | Can Re-assign? | Notes |
|---------|---------------|-------|
| `let` | ✅ Yes | Preferred for values that change |
| `const` | ❌ No | Use when the value never changes |
| `var` | ✅ Yes | Old way — has function scope, can cause unexpected behavior |

```js
const pi = 3.14;
pi = 3.1416;   // ❌ Error: const cannot be changed
```

### Automatic Semicolon Insertion
JavaScript will automatically add `;` at the end of lines if you forget.  
> ⚠️ This doesn't always work correctly — **always write your own semicolons**.

---

## Lesson 6 — Logical Operators & Booleans

### Strategy for Writing JavaScript
1. **Figure out the steps you need** → this is called an **Algorithm**
2. **Convert those steps into code** → implementing the algorithm

### Truthy and Falsy Values

| Category | Examples |
|----------|---------|
| **Truthy** | `1`, `'hello'`, `[]`, `{}`, any non-zero number |
| **Falsy** | `0`, `''`, `null`, `undefined`, `NaN` |

```js
cartQty = 5;
cartQty > 0    // → true  (truthy)

cartQty = 0;
cartQty > 0    // → false (falsy)
```

### The 3 Shortcut Operators for `if` Statements

#### 1. Ternary Operator `?`
A shortcut for `if / else`:
```js
condition ? valueIfTrue : valueIfFalse;

// Example:
const label = age >= 18 ? 'Adult' : 'Minor';
```

#### 2. Guard Operator `&&` (AND)
Stops early if the left side is **falsy** (short-circuit evaluation):
```js
false && value2   // → stops, returns false immediately

// Practical use: only run code if condition is met
isLoggedIn && showDashboard();
```

#### 3. Default Operator `||` (OR)
Stops early if the left side is **truthy**:
```js
true || value3    // → stops, returns true immediately

// Practical use: provide a fallback/default value
const name = userInput || 'Guest';
```

### Summary — Shortcuts for `if` Statements
| Operator | Symbol | Use Case |
|----------|--------|----------|
| Ternary | `? :` | Choose between two values |
| Guard | `&&` | Run code only if condition is true |
| Default | `\|\|` | Provide a fallback value |

---

## Lesson 7 — Scope (Review)

### What is Scope?
**Scope** limits where a variable exists in your code.

### Block Scope
Any variable created inside `{ }` only exists **within** those curly braces:

```js
if (num > 0 && num <= 1/3) {
  const computerMove = 'rock';   // Only exists inside this block
}

console.log(computerMove);   // ❌ Error — computerMove is not defined here
```

> **Key rule:** Variables declared with `let` or `const` are block-scoped — they live and die inside the `{ }` they were created in.

---



*End of Notes — Lessons 1 through 7*
