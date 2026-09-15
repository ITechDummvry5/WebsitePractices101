# code-patterns.md — JavaScript Syntax Patterns & Structures

> A syntax-pattern reference for JavaScript.  
> Use generic names such as `objectName`, `arrayName`, `value`, `functionName`, and `element`.

---

## 1. Variables & Values

### Variable

```js
const variableName = value;

let variableName = value;

var variableName = value;
```

### Reassignment

```js
variableName = newValue;
```

> `const` cannot be reassigned. `let` and `var` can.

### `typeof`

```js
typeof value;
```
### Accumulator pattern 

```js
// Addition
let total = 0;
total = total + value;

// Multiplication
let total = 1;
total = total * value;

// String
let result = '';
result = result + value;

// Array
let result = [];
result.push(value);
```

### Parse Number

```js
Number(value);

parseInt(value);

parseFloat(value);
```

### Convert To String

```js
String(value);

value.toString();
```

### Convert To Boolean

```js
Boolean(value);
```

### Template Literal

```js
`text ${value}`;
```

### Constants

```js
const constantName = value;
```

---

## 2. Operators

### Comparison

```js
value1 === value2;

value1 !== value2;

value1 == value2;

value1 != value2;

value1 > value2;

value1 < value2;

value1 >= value2;

value1 <= value2;
```

### Logical Operators

```js
condition1 && condition2;

condition1 || condition2;

!condition;
```

### Assignment Operators

```js
variableName = value;

variableName += value;

variableName -= value;

variableName *= value;

variableName /= value;

variableName %= value;

variableName **= value;

variableName &&= value;

variableName ||= value;

variableName ??= value;
```

### Arithmetic Operators

```js
value1 + value2;

value1 - value2;

value1 * value2;

value1 / value2;

value1 % value2;

value1 ** value2;
```

### Increment / Decrement

```js
variableName++;

variableName--;

++variableName;

--variableName;
```

### Nullish Coalescing

```js
value ?? defaultValue;
```

### Optional Chaining

```js
objectName?.propertyName;

objectName?.method?.();

arrayName?.[index];
```

### Conditional / Ternary

```js
condition ? valueIfTrue : valueIfFalse;
```

---

## 3. Conditionals

### If Statement

```js
if (condition) {
    // code
}
```

### If / Else

```js
if (condition) {
    // code
} else {
    // code
}
```

### Else If

```js
if (condition1) {
    // code
} else if (condition2) {
    // code
} else {
    // code
}
```

### Ternary

```js
condition ? valueIfTrue : valueIfFalse;
```

### Nested Ternary

```js
const result = condition1
    ? valueIfTrue
    : condition2
        ? valueIfTrue
        : valueIfFalse;
```

### Logical AND

```js
condition && code;
```

### Logical OR

```js
condition || code;
```

### Switch

```js
switch (value) {
    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}
```

---

## 4. Loops

### For Loop

```js
for (initialization; condition; update) {
    // code
}
```

### For Loop — Array Index

```js
for (let index = 0; index < arrayName.length; index++) {
    const currentValue = arrayName[index];

    // code
}
```

### While Loop

```js
while (condition) {
    // code
}
```

### Do / While

```js
do {
    // code
} while (condition);
```

### For...Of

```js
for (const value of iterable) {
    // code
}
```

### For...In

```js
for (const property in objectName) {
    // code
}
```

### Break

```js
break;
```

### Continue

```js
continue;
```

---

## 5. Functions

### Function

```js
function functionName(parameters) {
    // code
}

// Call:
functionName(arguments);
```

### Function Expression — Anonymous & Named

```js
const functionName = function(parameters) {
    // code
};

const functionName = function innerFunction(parameters) {
    // code
};
```

### Arrow Function

```js
const functionName = (parameters) => {
    // code
};

// Call:
functionName(arguments);
```

### Arrow Function — Implicit Return

```js
const functionName = (parameters) => value;
```

### Anonymous Function

```js
const functionName = function(parameters) {
    // code
};

// Call:
functionName(arguments);
```

### Parameters

```js
function functionName(parameter1, parameter2) {
    // code
}
```

### Arguments

```js
functionName(argument1, argument2);
```

### Default Parameter

```js
function functionName(parameter = defaultValue) {
    // code
}
```

### Rest Parameter

```js
function functionName(...parameters) {
    // code
}
```

### Return

```js
function functionName() {
    return value;
}
```

### Callback Function

```js
functionName(() => {
    // code
});
```

### Higher-Order Function

```js
function higherOrderFunction(callback) {
    callback();
}
```

---

## 6. Objects & Classes

### Object

```js
const objectName = {
    property: value,

    method() {}
};

// Call:
objectName.method();
```

### Nested Object

```js
const objectName = {
    property: value,

    nestedObject: {
        name: value
    }
};
```

### Property Access — Dot Notation & Bracket Notation

```js
objectName.propertyName;

objectName["propertyName"];
```

### Property Access — Dynamic Bracket Notation

```js
const propertyName = "name";

objectName[propertyName];
```

### Property Assignment — Dot Notation & Bracket Notation

```js
objectName.propertyName = value;

objectName["propertyName"] = value;
```

### Property Reassignment — Dot Notation & Bracket Notation

```js
objectName.propertyName = newValue;

objectName["propertyName"] = newValue;
```

### Add Property — Dot Notation & Bracket Notation

```js
objectName.newProperty = value;

objectName["newProperty"] = value;
```

### Delete Property — Dot Notation & Bracket Notation

```js
delete objectName.propertyName;

delete objectName["propertyName"];
```

### Method Call — Dot Notation & Bracket Notation

```js
objectName.method(arguments);

objectName["method"](arguments);
```

### Object Keys

```js
Object.keys(objectName);
```

### Object Values

```js
Object.values(objectName);
```

### Object Entries

```js
Object.entries(objectName);
```

### Object From Entries

```js
Object.fromEntries(entries);
```

### Check Property

```js
Object.hasOwn(objectName, propertyName);

objectName.hasOwnProperty(propertyName);
```

### Destructuring — Object

```js
const { property1, property2 } = objectName;
```

### Rename During Destructuring

```js
const { propertyName: newName } = objectName;
```

### Default During Destructuring

```js
const { propertyName = defaultValue } = objectName;
```

### Nested Destructuring

```js
const {
    nestedObject: {
        propertyName
    }
} = objectName;
```

### Rest — Object

```js
const { property1, ...restObject } = objectName;
```

### Spread — Object

```js
const newObject = {
    ...objectName
};
```

### Merge Objects

```js
const newObject = {
    ...object1,
    ...object2
};
```

### Class

```js
class ClassName {
    constructor(parameters) {
        // code
    }

    method() {
        // code
    }
}
```

### Create Class Instance

```js
const objectName = new ClassName(arguments);
```

### Call Class Method

```js
objectName.method(arguments);
```

### Class Field

```js
class ClassName {
    propertyName = value;
}
```

### Static Method

```js
class ClassName {
    static method() {
        // code
    }
}

ClassName.method();
```

### Getter

```js
class ClassName {
    get propertyName() {
        return value;
    }
}
```

### Setter

```js
class ClassName {
    set propertyName(value) {
        // code
    }
}
```

### Inheritance

```js
class ChildClass extends ParentClass {
    // code
}
```

### Super

```js
class ChildClass extends ParentClass {
    constructor(parameters) {
        super(arguments);
    }

    method() {
        super.method(arguments);
    }
}
```

### Instanceof

```js
value instanceof ClassName;
```

---

## 7. Arrays

### Array

```js
const arrayName = [value1, value2, value3];
```

### Empty Array

```js
const arrayName = [];
```

### Array Access

```js
arrayName[index];
```

### Array Assignment

```js
arrayName[index] = value;
```

### Array Reassignment

```js
arrayName[index] = newValue;
```

### Array Length

```js
arrayName.length;
```

### Array Method

```js
arrayName.method(arguments);
```

### Add To End — Push

```js
arrayName.push(value);
```

### Remove From End — Pop

```js
arrayName.pop();
```

### Remove From Start — Shift

```js
arrayName.shift();
```

### Add To Start — Unshift

```js
arrayName.unshift(value);
```

### Remove / Add At Index — Splice

```js
arrayName.splice(start, deleteCount, item);
```

### Copy Portion — Slice

```js
arrayName.slice(start, end);
```

### Includes

```js
arrayName.includes(value);
```

### Index Of

```js
arrayName.indexOf(value);
```

### Last Index Of

```js
arrayName.lastIndexOf(value);
```

### Find

```js
arrayName.find((value) => {
    // condition
});
```

### Find Index

```js
arrayName.findIndex((value) => {
    // condition
});
```

### Find Last

```js
arrayName.findLast((value) => {
    // condition
});
```

### Find Last Index

```js
arrayName.findLastIndex((value) => {
    // condition
});
```

### Some

```js
arrayName.some((value) => {
    // condition
});
```

### Every

```js
arrayName.every((value) => {
    // condition
});
```

### Map

```js
arrayName.map((value) => {
    // code
});
```

### Filter

```js
arrayName.filter((value) => {
    // condition
});
```

### For Each

```js
arrayName.forEach((value) => {
    // code
});
```

### Reduce

```js
arrayName.reduce((accumulator, value) => {
    // code
}, initialValue);
```

### Reduce Right

```js
arrayName.reduceRight((accumulator, value) => {
    // code
}, initialValue);
```

### Sort

```js
arrayName.sort();
```

### Sort With Compare Function

```js
arrayName.sort((a, b) => {
    return a - b;
});
```

### Reverse

```js
arrayName.reverse();
```

### Join

```js
arrayName.join(separator);
```

### Concatenate

```js
arrayName.concat(otherArray);
```

### Flat

```js
arrayName.flat();

arrayName.flat(depth);
```

### Flat Map

```js
arrayName.flatMap((value) => {
    // code
});
```

### Fill

```js
arrayName.fill(value);

arrayName.fill(value, start, end);
```

### Copy Within

```js
arrayName.copyWithin(target, start, end);
```

### Destructuring — Array

```js
const [value1, value2] = arrayName;
```

### Skip Array Value

```js
const [value1, , value3] = arrayName;
```

### Rest — Array

```js
const [value1, ...restArray] = arrayName;
```

### Spread — Array

```js
const newArray = [...arrayName];
```

### Merge Arrays

```js
const newArray = [
    ...array1,
    ...array2
];
```

### Check If Array

```js
Array.isArray(value);
```

### Array From

```js
Array.from(iterable);
```

### Array Of

```js
Array.of(value1, value2, value3);
```

---

## 8. Set & Map

### Set

```js
const setName = new Set(values);
```

### Set Add

```js
setName.add(value);
```

### Set Has

```js
setName.has(value);
```

### Set Delete

```js
setName.delete(value);
```

### Set Clear

```js
setName.clear();
```

### Set Size

```js
setName.size;
```

### Set For Each

```js
setName.forEach((value) => {
    // code
});
```

### Set Values

```js
setName.values();
```

### Set Keys

```js
setName.keys();
```

### Set Entries

```js
setName.entries();
```

### Map

```js
const mapName = new Map();
```

### Map With Values

```js
const mapName = new Map([
    [key1, value1],
    [key2, value2]
]);
```

### Map Set

```js
mapName.set(key, value);
```

### Map Get

```js
mapName.get(key);
```

### Map Has

```js
mapName.has(key);
```

### Map Delete

```js
mapName.delete(key);
```

### Map Clear

```js
mapName.clear();
```

### Map Size

```js
mapName.size;
```

### Map For Each

```js
mapName.forEach((value, key) => {
    // code
});
```

### Map Keys

```js
mapName.keys();
```

### Map Values

```js
mapName.values();
```

### Map Entries

```js
mapName.entries();
```

---

## 9. Strings

### String

```js
const stringName = "text";
```

### String Length

```js
stringName.length;
```

### Character Access

```js
stringName[index];

stringName.charAt(index);
```

### Uppercase

```js
stringName.toUpperCase();
```

### Lowercase

```js
stringName.toLowerCase();
```

### Trim

```js
stringName.trim();

stringName.trimStart();

stringName.trimEnd();
```

### Includes

```js
stringName.includes(searchValue);
```

### Starts With

```js
stringName.startsWith(searchValue);
```

### Ends With

```js
stringName.endsWith(searchValue);
```

### Index Of

```js
stringName.indexOf(searchValue);
```

### Last Index Of

```js
stringName.lastIndexOf(searchValue);
```

### Slice

```js
stringName.slice(start, end);
```

### Substring

```js
stringName.substring(start, end);
```

### Replace

```js
stringName.replace(searchValue, newValue);
```

### Replace All

```js
stringName.replaceAll(searchValue, newValue);
```

### Split

```js
stringName.split(separator);
```

### Repeat

```js
stringName.repeat(count);
```

### Pad Start

```js
stringName.padStart(targetLength, padString);
```

### Pad End

```js
stringName.padEnd(targetLength, padString);
```

### Concatenate

```js
stringName.concat(otherString);
```

---

## 10. Numbers & Math

### Number

```js
const numberName = value;
```

### Check Finite

```js
Number.isFinite(value);
```

### Check Integer

```js
Number.isInteger(value);
```

### Check NaN

```js
Number.isNaN(value);
```

### Parse Integer

```js
parseInt(value);
```

### Parse Float

```js
parseFloat(value);
```

### Math Round

```js
Math.round(value);
```

### Math Floor

```js
Math.floor(value);
```

### Math Ceiling

```js
Math.ceil(value);
```

### Math Trunc

```js
Math.trunc(value);
```

### Math Absolute

```js
Math.abs(value);
```

### Math Maximum

```js
Math.max(value1, value2);
```

### Math Minimum

```js
Math.min(value1, value2);
```

### Math Power

```js
Math.pow(value, exponent);
```

### Math Square Root

```js
Math.sqrt(value);
```

### Math Random

```js
Math.random();
```

### Random Integer Pattern

```js
Math.floor(Math.random() * maxValue);
```

---

## 11. Errors

### Try / Catch

```js
try {
    // code
} catch (error) {
    // code
}
```

### Finally

```js
try {
    // code
} catch (error) {
    // code
} finally {
    // code
}
```

### Throw

```js
throw new Error(message);
```

### Custom Error

```js
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
```

---

## 12. Async & Promises

### Promise

```js
const promiseName = new Promise((resolve, reject) => {
    // code
});
```

### Resolve

```js
resolve(value);
```

### Reject

```js
reject(error);
```

### Then

```js
promise.then((value) => {
    // code
});
```

### Catch Promise Error

```js
promise.catch((error) => {
    // code
});
```

### Finally Promise

```js
promise.finally(() => {
    // code
});
```

### Async Function

```js
async function functionName() {
    // code
}
```

### Await

```js
const value = await promise;
```

### Async Arrow Function

```js
const functionName = async () => {
    // code
};
```

### Promise All

```js
const values = await Promise.all(promises);
```

### Promise All Settled

```js
const results = await Promise.allSettled(promises);
```

### Promise Race

```js
const value = await Promise.race(promises);
```

### Promise Any

```js
const value = await Promise.any(promises);
```

### Fetch

```js
const response = await fetch(url);
```

### Fetch With Options

```js
const response = await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
});
```

---

## 13. Date & Time

### Date

```js
const dateName = new Date();
```

### Date From Value

```js
const dateName = new Date(value);
```

### Get Year

```js
dateName.getFullYear();
```

### Get Month

```js
dateName.getMonth();
```

### Get Date

```js
dateName.getDate();
```

### Get Day

```js
dateName.getDay();
```

### Get Hours

```js
dateName.getHours();
```

### Get Minutes

```js
dateName.getMinutes();
```

### Get Seconds

```js
dateName.getSeconds();
```

### ISO String

```js
dateName.toISOString();
```

### Date String

```js
dateName.toDateString();
```

---

## 14. JSON

### JSON Parse

```js
JSON.parse(value);
```

### JSON Stringify

```js
JSON.stringify(value);
```

---

## 15. Modules

### Import Named

```js
import { name } from "module";
```

### Import Multiple Named

```js
import { name1, name2 } from "module";
```

### Import Default

```js
import name from "module";
```

### Import Default + Named

```js
import name, { name1 } from "module";
```

### Import All

```js
import * as name from "module";
```

### Export Named

```js
export const name = value;
```

### Export Function

```js
export function functionName() {
    // code
}
```

### Export Default

```js
export default value;
```

### Export Existing Names

```js
export { name };
```

### Rename Export

```js
export { name as newName };
```

---

## 16. DOM

### DOM Query

```js
document.querySelector(selector);
```

### DOM Query All

```js
document.querySelectorAll(selector);
```

### DOM Query by ID

```js
document.getElementById(id);
```

### DOM Query by Tag

```js
document.getElementsByTagName(tag);
```

### DOM Query by Class

```js
document.getElementsByClassName(className);
```

### Create Element

```js
document.createElement(elementName);
```

### Append Child

```js
parentElement.appendChild(element);
```

### Append

```js
parentElement.append(element);
```

### Remove Element

```js
element.remove();
```

### Add Class

```js
element.classList.add(className);
```

### Remove Class

```js
element.classList.remove(className);
```

### Toggle Class

```js
element.classList.toggle(className);
```

### Check Class

```js
element.classList.contains(className);
```

### Replace Class

```js
element.classList.replace(oldClass, newClass);
```

### Text Content

```js
element.textContent = value;
```

### Get Text Content

```js
element.textContent;
```

### Inner HTML

```js
element.innerHTML = value;
```

### Get Inner HTML

```js
element.innerHTML;
```

### Input Value

```js
element.value;
```

### Set Input Value

```js
element.value = value;
```

### Attribute Get — Dot / Method

```js
element.attributeName;

element.getAttribute(attributeName);
```

### Attribute Set

```js
element.setAttribute(attributeName, value);
```

### Attribute Remove

```js
element.removeAttribute(attributeName);
```

### Attribute Check

```js
element.hasAttribute(attributeName);
```

### Inline Style

```js
element.style.propertyName = value;
```

### Dataset

```js
element.dataset.propertyName;

element.dataset.propertyName = value;
```

### Array Index + DOM `.textContent`

```js
for (let index = 0; index < arrayName.length; index++) {
    arrayName[index].textContent = value;
}
```

### Event Listener

```js
element.addEventListener("event", functionName);
```

### Inline Callback

```js
element.addEventListener("event", () => {
    // code
});
```

### Event Object

```js
element.addEventListener("event", (event) => {
    event;
});
```

### Prevent Default

```js
event.preventDefault();
```

### Stop Propagation

```js
event.stopPropagation();
```

### Event Target

```js
event.target;
```

### Event Current Target

```js
event.currentTarget;
```

---

## 17. Browser & Storage

### Console

```js
console.log(value);

console.error(value);

console.warn(value);

console.table(value);
```

### Alert

```js
alert(message);
```

### Confirm

```js
confirm(message);
```

### Prompt

```js
prompt(message);
```

### Local Storage — Set

```js
localStorage.setItem(key, value);
```

### Local Storage — Get

```js
localStorage.getItem(key);
```

### Local Storage — Remove

```js
localStorage.removeItem(key);
```

### Local Storage — Clear

```js
localStorage.clear();
```

### Session Storage — Set

```js
sessionStorage.setItem(key, value);
```

### Session Storage — Get

```js
sessionStorage.getItem(key);
```

### Session Storage — Remove

```js
sessionStorage.removeItem(key);
```

### Session Storage — Clear

```js
sessionStorage.clear();
```

---

## 18. Regular Expressions

### Regex

```js
const regexName = /pattern/flags;
```

### Test

```js
regexName.test(value);
```

### Match

```js
value.match(regexName);
```

### Replace With Regex

```js
value.replace(regexName, replacement);
```

### Search

```js
value.search(regexName);
```

### Common Flags

```js
/pattern/g;

/pattern/i;

/pattern/m;

/pattern/gi;
```

---

## 19. Web APIs

### Query URL

```js
const urlName = new URL(url);
```

### URL Search Parameters

```js
const params = new URLSearchParams();
```

### Add URL Parameter

```js
params.set(key, value);
```

### Get URL Parameter

```js
params.get(key);
```

### Encode URI

```js
encodeURIComponent(value);
```

### Decode URI

```js
decodeURIComponent(value);
```

### Set Timeout

```js
setTimeout(() => {
    // code
}, milliseconds);
```

### Clear Timeout

```js
clearTimeout(timeoutId);
```

### Set Interval

```js
setInterval(() => {
    // code
}, milliseconds);
```

### Clear Interval

```js
clearInterval(intervalId);
```

---

## 20. Common JavaScript Patterns

### Check Empty String

```js
value === "";
```

### Check Not Empty

```js
value !== "";
```

### Trim Before Checking

```js
value.trim() !== "";
```

### Check NaN

```js
Number.isNaN(value);
```

### Convert Input To Number

```js
const numberValue = Number(input.value);
```

### Store Result

```js
const result = expression;
```

### Return Early

```js
function functionName() {
    if (condition) {
        return;
    }

    // code
}
```

### Guard Clause

```js
if (!condition) {
    return;
}

// main code
```

### Object Lookup With Variable Key

```js
const key = propertyName;

objectName[key];
```

### Array Loop With Index

```js
for (let index = 0; index < arrayName.length; index++) {
    const value = arrayName[index];
}
```

### Array Callback

```js
arrayName.method((value, index, array) => {
    // code
});
```

### Object Loop

```js
for (const [key, value] of Object.entries(objectName)) {
    // code
}
```

### Conditional Assignment

```js
const result = condition ? valueIfTrue : valueIfFalse;
```

### Default Value

```js
const result = value ?? defaultValue;
```

### Optional Property

```js
const result = objectName?.propertyName;
```

---

## 21. Quick Reference — Core Structures

### Variable

```js
const variableName = value;
```

### Function

```js
function functionName(parameters) {
    // code
}
```

### Object

```js
const objectName = {
    property: value
};
```

### Array

```js
const arrayName = [value1, value2];
```

### Condition

```js
if (condition) {
    // code
}
```

### Loop

```js
for (const value of iterable) {
    // code
}
```

### Class

```js
class ClassName {
    constructor(parameters) {
        // code
    }

    method() {
        // code
    }
}
```

### Promise

```js
const promiseName = new Promise((resolve, reject) => {
    // code
});
```

### Async Function

```js
async function functionName() {
    const value = await promise;
}
```

### DOM Event

```js
element.addEventListener("event", () => {
    // code
});
```

---

## Completeness Checklist

### Core JavaScript

- [x] Variables
- [x] Reassignment
- [x] Types
- [x] Conversion
- [x] Operators
- [x] Conditionals
- [x] Loops
- [x] Functions
- [x] Objects
- [x] Classes
- [x] Arrays
- [x] Strings
- [x] Numbers & Math
- [x] Set
- [x] Map
- [x] Errors
- [x] Promises
- [x] Async / Await
- [x] Date
- [x] JSON
- [x] Modules
- [x] Regular Expressions

### Browser JavaScript

- [x] DOM Selection
- [x] DOM Creation
- [x] DOM Modification
- [x] Classes
- [x] Attributes
- [x] Events
- [x] Event Object
- [x] Browser Dialogs
- [x] Local Storage
- [x] Session Storage
- [x] URL APIs
- [x] Timers
- [x] Fetch

### Modern JavaScript

- [x] Destructuring
- [x] Spread
- [x] Rest Parameters
- [x] Optional Chaining
- [x] Nullish Coalescing
- [x] Default Parameters
- [x] Template Literals
- [x] Arrow Functions
- [x] `Object.keys()`
- [x] `Object.values()`
- [x] `Object.entries()`
- [x] `Object.fromEntries()`
- [x] `Array.from()`
- [x] `Array.of()`
- [x] Array `map()`
- [x] Array `filter()`
- [x] Array `reduce()`
- [x] Array `find()`
- [x] Array `findIndex()`
- [x] Array `some()`
- [x] Array `every()`
- [x] Array `flat()`
- [x] Array `flatMap()`

> This reference focuses on practical JavaScript syntax and commonly used language/browser APIs. It is intended as a pattern sheet rather than an exhaustive specification of every JavaScript built-in API.
