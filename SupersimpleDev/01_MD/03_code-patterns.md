# code-patterns.md — JavaScript syntax patterns and structures

## 1. Variables & Values

### Variable:

```js
const variableName = value;
let variableName = value;
var variableName = value;
```

### Typeof:

```js
typeof value;
```

### Parse Number:

```js
Number(value);
parseInt(value);
parseFloat(value);
```

### Convert To String:

```js
String(value);
value.toString();
```

### Convert To Boolean:

```js
Boolean(value);
```

## 2. Operators

### Comparison:

```js
value1 === value2;
value1 !== value2;
value1 > value2;
value1 < value2;
value1 >= value2;
value1 <= value2;
```

### Logical Operators:

```js
condition1 && condition2;
condition1 || condition2;
!condition;
```

### Assignment Operators:

```js
variableName = value;
variableName += value;
variableName -= value;
variableName *= value;
variableName /= value;
variableName %= value;
```

### Arithmetic Operators:

```js
value1 + value2;
value1 - value2;
value1 * value2;
value1 / value2;
value1 % value2;
value1 ** value2;
```

### Increment / Decrement:

```js
variableName++;
variableName--;
++variableName;
--variableName;
```

### Default Value — OR:

```js
value || defaultValue;
```

### Default Value — Nullish:

```js
value ?? defaultValue;
```

### Optional Chaining:

```js
objectName?.propertyName;
objectName?.method?.();
```

## 3. Conditionals

### If Statement:

```js
if (condition) {
    // code
}
```

### If / Else:

```js
if (condition) {
    // code
} else {
    // code
}
```

### Else If:

```js
if (condition) {
    // code
} else if (condition) {
    // code
} else {
    // code
}
```

### If / Else — Ternary:

```js
condition ? valueIfTrue : valueIfFalse;
```

### Nested Ternary:

```js
const result = condition1
    ? valueIfTrue
    : condition2
        ? valueIfTrue
        : valueIfFalse;
```

### If — Logical AND:

```js
condition && code;
```

### If — Logical OR:

```js
condition || code;
```

### Switch:

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

## 4. Loops

### For Loop:

```js
for (initialization; condition; update) {
    // code
}
```

### For Loop — Array Index:

```js
for (let index = 0; index < array.length; index++) {
    const currentValue = array[index];
    console.log(currentValue);
}
```

### While Loop:

```js
while (condition) {
    // code
}
```

### Do / While:

```js
do {
    // code
} while (condition);
```

### For...Of:

```js
for (const value of iterable) {
    // code
}
```

### For...In:

```js
for (const property in objectName) {
    // code
}
```

### Break:

```js
break;
```

### Continue:

```js
continue;
```

## 5. Functions

### Function:

```js
function functionName(parameters) {
    // code
}
// Call:
functionName(arguments);
```

### Arrow Function:

```js
const functionName = (parameters) => {
    // code
};
// Call:
functionName(arguments);
```

### Anonymous Function:

```js
const functionName = function(parameters) {
    // code
};
// Call:
functionName(arguments);
```

### Parameters:

```js
function functionName(parameter1, parameter2) {
    // code
}
```

### Arguments:

```js
functionName(argument1, argument2);
```

### Default Parameter:

```js
function functionName(parameter = defaultValue) {
    // code
}
```

### Rest Parameter:

```js
function functionName(...parameters) {
    // code
}
```

### Return:

```js
function functionName() {
    return value;
}
```

## 6. Objects & Classes

### Object:

```js
const objectName = {
    property: value,
    method() {}
};
// Call:
objectName.method();
```

### Nested Object:

```js
const objectName = {
    property: value,
    nestedObject: {
        name: "John"
    }
};
```

### Property Access — Dot Notation:

```js
objectName.propertyName;
```

### Property Access — Bracket Notation:

```js
objectName["propertyName"];
```

### Property Assignment — Dot Notation:

```js
objectName.propertyName = value;
```

### Property Assignment — Bracket Notation:

```js
objectName["propertyName"] = value;
```

### Method:

```js
objectName.method(arguments);
```

### Object Keys:

```js
Object.keys(objectName);
```

### Object Values:

```js
Object.values(objectName);
```

### Object Entries:

```js
Object.entries(objectName);
```

### Class:

```js
class ClassName {
    constructor(parameters) {
        // code
    }
    method() {
        // code
    }
}
// Create:
const objectName = new ClassName(arguments);
// Call:
objectName.method();
```

### New:

```js
const objectName = new ClassName(arguments);
```

### Instanceof:

```js
value instanceof ClassName;
```

### Destructuring — Object:

```js
const { property1, property2 } = objectName;
```

### Spread — Object:

```js
const newObject = { ...objectName };
```

## 7. Arrays

### Array:

```js
const arrayName = [value1, value2, value3];
```

### Array Access:

```js
arrayName[index];
```

### Array Assignment:

```js
arrayName[index] = value;
```

### Array Length:

```js
arrayName.length;
```

### Array Method:

```js
arrayName.method(arguments);
```

### Array Push:

```js
arrayName.push(value);
```

### Array Pop:

```js
arrayName.pop();
```

### Array Shift:

```js
arrayName.shift();
```

### Array Unshift:

```js
arrayName.unshift(value);
```

### Array Includes:

```js
arrayName.includes(value);
```

### Array Index Of:

```js
arrayName.indexOf(value);
```

### Array Slice:

```js
arrayName.slice(start, end);
```

### Array Splice:

```js
arrayName.splice(start, deleteCount, item);
```

### Array Map:

```js
arrayName.map((value) => {
    // code
});
```

### Array Filter:

```js
arrayName.filter((value) => {
    // condition
});
```

### Array Find:

```js
arrayName.find((value) => {
    // condition
});
```

### Array For Each:

```js
arrayName.forEach((value) => {
    // code
});
```

### Array Reduce:

```js
arrayName.reduce((accumulator, value) => {
    // code
}, initialValue);
```

### Destructuring — Array:

```js
const [value1, value2] = arrayName;
```

### Spread — Array:

```js
const newArray = [...arrayName];
```

## 8. Set & Map

### Set:

```js
const setName = new Set(values);
```

### Set Add:

```js
setName.add(value);
```

### Set Has:

```js
setName.has(value);
```

### Set Delete:

```js
setName.delete(value);
```

### Map:

```js
const mapName = new Map();
```

### Map Set:

```js
mapName.set(key, value);
```

### Map Get:

```js
mapName.get(key);
```

### Map Has:

```js
mapName.has(key);
```

### Map Delete:

```js
mapName.delete(key);
```

## 9. Errors

### Try / Catch:

```js
try {
    // code
} catch (error) {
    // code
}
```

### Finally:

```js
try {
    // code
} catch (error) {
    // code
} finally {
    // code
}
```

### Throw:

```js
throw new Error(message);
```

## 10. Async & Promises

### Date:

```js
const dateName = new Date();
```

### Promise:

```js
const promiseName = new Promise((resolve, reject) => {
    // code
});
```

### Async Function:

```js
async function functionName() {
    // code
}
```

### Await:

```js
const value = await promise;
```

### Fetch:

```js
const response = await fetch(url);
```

## 11. JSON

### JSON Parse:

```js
JSON.parse(value);
```

### JSON Stringify:

```js
JSON.stringify(value);
```

## 12. Modules

### Import:

```js
import { name } from "module";
```

### Import Default:

```js
import name from "module";
```

### Import All:

```js
import * as name from "module";
```

### Export:

```js
export const name = value;
```

### Export Default:

```js
export default value;
```

### Export Named:

```js
export { name };
```

## 13. DOM

### DOM Query:

```js
document.querySelector(selector);
```

### DOM Query All:

```js
document.querySelectorAll(selector);
```

### DOM Query by ID:

```js
document.getElementById(id);
```

### DOM Query by Tag:

```js
document.getElementsByTagName(tag);
```

### DOM Query by Class:

```js
document.getElementsByClassName(class);
```

### Create Element:

```js
document.createElement(elementName);
```

### Add Class:

```js
element.classList.add(className);
```

### Remove Class:

```js
element.classList.remove(className);
```

### Toggle Class:

```js
element.classList.toggle(className);
```

### Text Content:

```js
element.textContent = value;
```

### Inner HTML:

```js
element.innerHTML = value;
```

### Array Index + DOM .textContent:

```js
for (let index = 0; index < array.length; index++) {
    array[index].textContent = value;
}
```

### Event Listener:

```js
element.addEventListener("event", functionName);
```

## 14. Console

### Console:

```js
console.log(value);
```