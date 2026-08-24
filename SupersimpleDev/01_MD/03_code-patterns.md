This File - **code-patterns.md** — JavaScript syntax patterns and structures

### Variable:

```js
const variableName = value;
let variableName = value;
var variableName = value;
```
### Function:

```js
function functionName(parameters) {
    // code
}
// Call:
functionName(arguments);
```
### Object:

```js
const objectName = {
    property: value,
    method() {}
};
// Call:
objectName.method();
```

### Nested Object : 

```js
const objectName = {
    property: value,
    nestedObject: {
        name: "John"
    }
};
```

### Array:

```js
const arrayName = [value1, value2, value3];
```
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
### If — Logical AND:

```js
condition && code;
```
### If — Logical OR:

```js
condition || code;
```
### Default Value — OR:

```js
value || defaultValue;
```
### Default Value — Nullish:

```js
value ?? defaultValue;
```
### For Loop:

```js
for (initialization; condition; update) {
    // code
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
### Array Access:

```js
arrayName[index];
```
### Array Assignment:

```js
arrayName[index] = value;
```
### Array Method:

```js
arrayName.method(arguments);
```
### Method:

```js
objectName.method(arguments);
```
### Return:

```js
function functionName() {
    return value;
}
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
### Break:

```js
break;
```
### Continue:

```js
continue;
```
### Destructuring — Object:

```js
const { property1, property2 } = objectName;
```
### Destructuring — Array:

```js
const [value1, value2] = arrayName;
```
### Spread — Object:

```js
const newObject = { ...objectName };
```
### Spread — Array:

```js
const newArray = [...arrayName];
```
### Rest Parameter:

```js
function functionName(...parameters) {
    // code
}
```
### Default Parameter:

```js
function functionName(parameter = defaultValue) {
    // code
}
```
### Optional Chaining:

```js
objectName?.propertyName;
objectName?.method?.();
```
### Typeof:

```js
typeof value;
```
### Instanceof:

```js
value instanceof ClassName;
```
### New:

```js
const objectName = new ClassName(arguments);
```
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
### Console:

```js
console.log(value);
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
### Array Length:

```js
arrayName.length;
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
### JSON Parse:

```js
JSON.parse(value);
```
### JSON Stringify:

```js
JSON.stringify(value);
```
### Event Listener:

```js
element.addEventListener("event", functionName);
```
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
