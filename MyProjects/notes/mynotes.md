**new `notes.md`**, I’d make the topic broader than just Arrays and Objects: **“Properties & Methods”** and then show the major JavaScript things you’ll encounter that have them.

# Properties & Methods

## What Are Properties and Methods?

JavaScript values and objects can have **properties** and **methods**.

* **Property** → stores or describes information about something.
* **Method** → a function associated with an object that performs an action.

### Simple Relationship

```text
Object / Value
     │
     ├── Property → information
     │
     └── Method   → action
```

---

## 1. Object Properties & Methods

An `Object` can have properties that store data and methods that perform actions.

```js
const person = {
    name: "John",
    age: 25,

    greet() {
        console.log("Hello");
    }
};
```

### Property

```js
person.name;
person.age;
```

`name` and `age` are properties.

### Method

```js
person.greet();
```

`greet()` is a method.

### Structure

```text
Object
├── Properties → name, age
└── Methods    → greet()
```

---

## 2. Array Properties & Methods

An `Array` also has properties and methods.

```js
const fruits = ["Apple", "Banana", "Mango"];
```

### Property

```js
fruits.length;
```

`length` is a property that tells you how many elements are in the array.

### Methods

```js
fruits.push("Orange");
fruits.pop();
```

`push()` and `pop()` are array methods.

### Structure

```text
Array
├── Property → length
└── Methods  → push(), pop(), shift(), unshift(), etc.
```

---

## 3. String Properties & Methods

Strings can be used with properties and methods.

```js
const name = "John";
```

### Property

```js
name.length;
```

`length` tells you how many characters are in the string.

### Methods

```js
name.toUpperCase();
name.toLowerCase();
```

These methods create a changed version of the string.

### Structure

```text
String
├── Property → length
└── Methods  → toUpperCase(), toLowerCase(), etc.
```

---

## 4. Number Properties & Methods

Numbers have built-in methods and can be used with some properties of the `Number` object.

```js
const price = 10.567;
```

### Method

```js
price.toFixed(2);
```

`toFixed()` formats a number to a specified number of decimal places.

```js
price.toFixed(2); // "10.57"
```

### Important

`toFixed()` returns a **String**, not a Number.

---

## 5. Function Properties & Methods

Functions are objects in JavaScript, so functions can also have properties and methods.

```js
function greet() {
    console.log("Hello");
}
```

A function can be called:

```js
greet();
```

Functions also have built-in properties and methods.

For example:

```js
greet.name;
```

`name` is a property of the function.

---

## 6. Date Properties & Methods

A `Date` object has methods for working with dates and times.

```js
const today = new Date();
```

### Methods

```js
today.getFullYear();
today.getMonth();
today.getDate();
```

These methods retrieve parts of the date.

### Structure

```text
Date Object
└── Methods → getFullYear(), getMonth(), getDate(), etc.
```

---

## 7. Math Properties & Methods

`Math` is a built-in JavaScript object containing mathematical properties and methods.

### Properties

```js
Math.PI;
Math.E;
```

### Methods

```js
Math.round(4.6);
Math.floor(4.6);
Math.ceil(4.2);
Math.random();
```

### Structure

```text
Math
├── Properties → PI, E
└── Methods    → round(), floor(), ceil(), random(), etc.
```

---

## 8. DOM Elements Have Properties & Methods

DOM elements also have properties and methods.

```js
const button = document.querySelector("button");
```

### Property

```js
button.innerHTML;
```

`innerHTML` is a property containing the HTML content inside the element.

Other examples:

```js
button.textContent;
button.value;
button.id;
```

### Method

```js
button.addEventListener("click", function () {
    console.log("Clicked");
});
```

`addEventListener()` is a method.

### Structure

```text
DOM Element
├── Properties → innerHTML, textContent, value, id
└── Methods    → addEventListener(), etc.
```

---

# Property vs Method

| **Term**     | **Meaning**                                   | **Example**      |
| ------------ | --------------------------------------------- | ---------------- |
| **Property** | A value that belongs to an object or value    | `person.name`    |
| **Method**   | A function that belongs to an object or value | `person.greet()` |

### Easy Way to Remember

```text
Property → describes / stores information
Method   → performs an action
```

---

# Property Access

Properties can be accessed using **Dot Notation** or **Bracket Notation**.

### Dot Notation

```js
object.property;
```

Example:

```js
person.name;
```

### Bracket Notation

```js
object["property"];
```

Example:

```js
person["name"];
```

---

# Method Call

A method is called by using parentheses `()`.

```js
object.method();
```

Example:

```js
fruits.push("Orange");
```

Here:

```text
fruits → object
push   → method
()     → calls the method
```

---

# Property vs Method — Visual Difference

```js
person.name;
person.greet();
```

```text
person.name
      │
      └── Property

person.greet()
      │      │
      │      └── () calls it
      │
      └── Method
```

The `()` are an important clue that you are **calling a function/method**.

---

# Common JavaScript Things With Properties & Methods

| **Thing**       | **Property Example** | **Method Example**          |
| --------------- | -------------------- | --------------------------- |
| **Object**      | `person.name`        | `person.greet()`            |
| **Array**       | `fruits.length`      | `fruits.push()`             |
| **String**      | `name.length`        | `name.toUpperCase()`        |
| **Number**      | —                    | `price.toFixed()`           |
| **Function**    | `greet.name`         | `greet.call()`              |
| **Date**        | —                    | `today.getFullYear()`       |
| **Math**        | `Math.PI`            | `Math.random()`             |
| **DOM Element** | `button.innerHTML`   | `button.addEventListener()` |

---

# Important Difference

Not everything that uses `.` is necessarily a property.

```js
person.name;
```

`name` → property

```js
person.greet();
```

`greet` → method

A method is essentially a **function stored as a property**.

```js
const person = {
    name: "John",

    greet: function () {
        console.log("Hello");
    }
};
```

Here:

```text
name  → property
greet → property containing a function
```

Because `greet` contains a function and can be called, we commonly call it a **method**.

---

# Key Terms

| **Term**              | **Meaning**                          |
| --------------------- | ------------------------------------ |
| **Property**          | A value associated with an object    |
| **Method**            | A function associated with an object |
| **Property Access**   | Accessing a property's value         |
| **Method Call**       | Executing a method using `()`        |
| **Dot Notation**      | Accessing members using `.`          |
| **Bracket Notation**  | Accessing members using `[]`         |
| **Built-in Property** | A property provided by JavaScript    |
| **Built-in Method**   | A method provided by JavaScript      |
| **Object Property**   | A property belonging to an object    |
| **Object Method**     | A function belonging to an object    |

This gives you a good foundation because you can now recognize the same pattern across **Objects, Arrays, Strings, Numbers, Functions, Date, Math, and DOM elements**.
