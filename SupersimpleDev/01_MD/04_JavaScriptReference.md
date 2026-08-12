### toFixed()
The `toFixed()` method formats a number to a fixed number of decimal places.
1. 
```javascript
console.log((7.7965).toFixed(2));
```

### typeof
The `typeof` operator checks the data type of a value.
2. 
```javascript
console.log(typeof 29.99);
```

### Math.random()
`Math.random()` generates a random decimal number from `0` (inclusive) to `1` (exclusive).
3. 
```javascript
console.log(Math.random());
```

### length
`length` returns the number of characters in a string or items in an array.
4. 
```javascript
console.log(["apple", "banana", "orange"].length);
```

### Math.floor()
`Math.floor()` rounds a number **down** to the nearest whole number.
5. 
```javascript
console.log(Math.floor(7.99));
```

### Math.round()
`Math.round()` rounds a number to the nearest whole number.
6. 
A **Affects calculations** if used in math.
```javascript
const price = Math.round(7.49);
const total = price * 2;

console.log(total);
```
6. 
B **Doesn't affect calculations** if only used for display.
```javascript
const value = 7.49;

console.log(Math.round(value));
```

### toUpperCase()
`toUpperCase()` converts all letters in a string to uppercase.
7. 
```javascript
console.log('hello'.toUpperCase());
```

### toLowerCase()
`toLowerCase()` converts all letters in a string to lowercase.
8. 
```javascript
console.log('HELLO'.toLowerCase());
```

### toString()
`toString()` converts a value into a string.
9. 
```javascript
console.log((123).toString());
```

### trim()
`trim()`  removes whitespace (spaces, tabs, and line breaks) from the beginning and end of a string.
10. 
```javascript
console.log('   Hello World!   '.trim());
// 'Hello World!'
```

### includes()
`includes()` checks whether a string contains specific text.
11. 
```javascript
console.log('JavaScript'.includes('Script'));
// true
```

### startsWith()
`startsWith()` checks whether a string starts with specific text.
12. 
```javascript
console.log('JavaScript'.startsWith('Java'));
// true
```

### endsWith()
`endsWith()` checks whether a string ends with specific text.
13. 
```javascript
console.log('JavaScript'.endsWith('Script'));
// true
```

### slice()
`slice()` extracts part of a string without changing the original.
14. 
```javascript
console.log('JavaScript'.slice(0, 4));
// 'Java'
```

### replace()
`replace()` replaces the first matching part of a string.
15. 
```javascript
console.log('Hello World'.replace('World', 'JavaScript'));
// 'Hello JavaScript'
```

### repeat()
`repeat()` repeats a string a specified number of times.
16. 
```javascript
console.log('Hi! '.repeat(3));
// 'Hi! Hi! Hi! '
```

### Number()
`Number()` converts a value into a number.
17. 
```javascript
console.log(Number('123'));
// 123
```

### String()
`String()` converts a value into a string.
18. 
```javascript
console.log(String(123));
// '123'
```

### Boolean()
`Boolean()` converts a value into `true` or `false`.
19. 
```javascript
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
```

### parseInt()
`parseInt()` converts a string into an integer.
20. 
```javascript
console.log(parseInt('42'));
// 42
```

### parseFloat()
`parseFloat()` converts a string into a decimal number.
21. 
```javascript
console.log(parseFloat('3.14'));
// 3.14
```

### `JSON.stringify()`
`JSON.stringify()` converts a JavaScript value into a JSON string.
22. 
```javascript
console.log(JSON.stringify({ name: 'Charles' }));
// or
console.log(JSON.stringify(mangafire)); -> when it passed it called argument
// '{"name":"Charles"}'
```

### JSON.parse()
`JSON.parse()` converts a JSON string into a JavaScript value.
23. 
```javascript
console.log(JSON.parse('{"name":"Charles"}'));
// { name: 'Charles' }
```

### Local Storage
`localStorage` stores data in the browser. It only supports strings.
24. 
```javascript
localStorage.setItem('name', 'Charles');
console.log(localStorage.getItem('name'));
// Charles
```

### concat()
`concat()` combines two or more arrays or strings without changing the original.
35. 
```javascript
console.log([1, 2].concat([3, 4]));
// [1, 2, 3, 4]
```

### sort()
`sort()` sorts the items of an array in place.
36. 
```javascript
console.log([3, 1, 2].sort());
// [1, 2, 3]
```

### reverse()
`reverse()` reverses the order of the items in an array.
37. 
```javascript
console.log([1, 2, 3].reverse());
// [3, 2, 1]
```

### push()
`push()` adds one or more items to the end of an array.
38. 
```javascript
const fruits = ["apple", "banana"];
console.log(fruits.push("orange"));
// 3
```

### pop()
`pop()` removes the last item from an array and returns it.
39. 
```javascript
const fruits = ["apple", "banana", "orange"];
console.log(fruits.pop());
// 'orange'
```

### shift()
`shift()` removes the first item from an array and returns it.
40. 
```javascript
const fruits = ["apple", "banana", "orange"];
console.log(fruits.shift());
// 'apple'
```

### unshift()
`unshift()` adds one or more items to the beginning of an array.
41. 
```javascript
const fruits = ["banana", "orange"];
console.log(fruits.unshift("apple"));
// 3
```

### indexOf()
`indexOf()` returns the first index at which a value is found, or `-1` if not found.
42. 
```javascript
console.log(["apple", "banana", "orange"].indexOf("banana"));
// 1
```

### find()
`find()` returns the first item in an array that matches a condition.
43. 
```javascript
console.log([1, 2, 3, 4].find(num => num > 2));
// 3
```

### findIndex()
`findIndex()` returns the index of the first item that matches a condition, or `-1` if not found.
44. 
```javascript
console.log([1, 2, 3, 4].findIndex(num => num > 2));
// 2
```

### filter()
`filter()` returns a new array with all items that match a condition.
45. 
```javascript
console.log([1, 2, 3, 4].filter(num => num % 2 === 0));
// [2, 4]
```

### map()
`map()` returns a new array with the results of calling a function on every item.
46. 
```javascript
console.log([1, 2, 3].map(num => num * 2));
// [2, 4, 6]
```

### forEach()
`forEach()` runs a function once for each item in an array (doesn't return a new array).
47. 
```javascript
["a", "b", "c"].forEach(letter => console.log(letter));
// a
// b
// c
```

### reduce()
`reduce()` runs a function on each item to reduce the array to a single value.
48. 
```javascript
console.log([1, 2, 3, 4].reduce((total, num) => total + num, 0));
// 10
```

### join()
`join()` combines all items of an array into a string, separated by a given separator.
49. 
```javascript
console.log(["apple", "banana", "orange"].join(", "));
// 'apple, banana, orange'
```

### split()
`split()` splits a string into an array of substrings based on a separator.
50. 
```javascript
console.log("apple,banana,orange".split(","));
// ['apple', 'banana', 'orange']
```

### Array.isArray()
`Array.isArray()` checks whether a value is an array.
51. 
```javascript
console.log(Array.isArray([1, 2, 3]));
// true
```

### Array.from()
`Array.from()` creates a new array from an array-like or iterable object.
52. 
```javascript
console.log(Array.from("abc"));
// ['a', 'b', 'c']
```

### Object.keys()
`Object.keys()` returns an array of an object's property names.
53. 
```javascript
console.log(Object.keys({ name: "Charles", age: 25 }));
// ['name', 'age']
```

### Object.values()
`Object.values()` returns an array of an object's property values.
54. 
```javascript
console.log(Object.values({ name: "Charles", age: 25 }));
// ['Charles', 25]
```

### Object.entries()
`Object.entries()` returns an array of [key, value] pairs from an object.
55. 
```javascript
console.log(Object.entries({ name: "Charles", age: 25 }));
// [['name', 'Charles'], ['age', 25]]
```

### Math.max()
`Math.max()` returns the largest of the given numbers.
56. 
```javascript
console.log(Math.max(3, 7, 2));
// 7
```

### Math.min()
`Math.min()` returns the smallest of the given numbers.
57. 
```javascript
console.log(Math.min(3, 7, 2));
// 2
```

### Math.abs()
`Math.abs()` returns the absolute (non-negative) value of a number.
58. 
```javascript
console.log(Math.abs(-5));
// 5
```

### isNaN()
`isNaN()` checks whether a value is `NaN` (Not a Number).
59. 
```javascript
console.log(isNaN("hello"));
// true
```

### Number.isInteger()
`Number.isInteger()` checks whether a value is a whole number.
60. 
```javascript
console.log(Number.isInteger(4));
// true
console.log(Number.isInteger(4.5));
// false
```

### some()
`some()` checks whether at least one item in an array matches a condition.
61. 
```javascript
console.log([1, 2, 3].some(num => num > 2));
// true
```

### every()
`every()` checks whether all items in an array match a condition.
62. 
```javascript
console.log([1, 2, 3].every(num => num > 2));
// false
```

### flat()
`flat()` flattens nested arrays into a single array.
63. 
```javascript
console.log([1, [2, 3], [4, [5]]].flat());
// [1, 2, 3, 4, [5]]
```

### flatMap()
`flatMap()` maps each item then flattens the result by one level.
64. 
```javascript
console.log([1, 2, 3].flatMap(num => [num, num * 2]));
// [1, 2, 2, 4, 3, 6]
```

### fill()
`fill()` fills all or part of an array with a static value.
65. 
```javascript
console.log([1, 2, 3, 4].fill(0, 1, 3));
// [1, 0, 0, 4]
```

### Object.assign()
`Object.assign()` copies properties from one or more objects into a target object.
66. 
```javascript
console.log(Object.assign({}, { name: "Charles" }, { age: 25 }));
// { name: 'Charles', age: 25 }
```

### Object.freeze()
`Object.freeze()` prevents an object's properties from being changed.
67. 
```javascript
const user = Object.freeze({ name: "Charles" });
user.name = "Other";
console.log(user.name);
// 'Charles'
```

### charAt()
`charAt()` returns the character at a specified index in a string.
68. 
```javascript
console.log("JavaScript".charAt(4));
// 'S'
```

### charCodeAt()
`charCodeAt()` returns the Unicode value of the character at a specified index.
69. 
```javascript
console.log("A".charCodeAt(0));
// 65
```

### String.fromCharCode()
`String.fromCharCode()` creates a string from a sequence of Unicode values.
70. 
```javascript
console.log(String.fromCharCode(65, 66, 67));
// 'ABC'
```

### padStart()
`padStart()` pads a string at the beginning until it reaches a given length.
71. 
```javascript
console.log("5".padStart(2, "0"));
// '05'
```

### padEnd()
`padEnd()` pads a string at the end until it reaches a given length.
72. 
```javascript
console.log("5".padEnd(2, "0"));
// '50'
```

### Math.pow()
`Math.pow()` raises a number to the power of another number.
73. 
```javascript
console.log(Math.pow(2, 3));
// 8
```

### Math.sqrt()
`Math.sqrt()` returns the square root of a number.
74. 
```javascript
console.log(Math.sqrt(16));
// 4
```

### Math.ceil()
`Math.ceil()` rounds a number **up** to the nearest whole number.
75. 
```javascript
console.log(Math.ceil(7.01));
// 8
```

### Date.now()
`Date.now()` returns the current timestamp in milliseconds since Jan 1, 1970.
76. 
```javascript
console.log(Date.now());
// 1755000000000
```

### getFullYear()
`getFullYear()` returns the four-digit year of a `Date` object.
77. 
```javascript
console.log(new Date().getFullYear());
// 2026
```

### encodeURIComponent()
`encodeURIComponent()` encodes special characters in a string for use in a URL.
78. 
```javascript
console.log(encodeURIComponent("hello world/test"));
// 'hello%20world%2Ftest'
```

### decodeURIComponent()
`decodeURIComponent()` decodes a URI-encoded string back to its original form.
79. 
```javascript
console.log(decodeURIComponent("hello%20world%2Ftest"));
// 'hello world/test'
```

### at()
`at()` returns the item at a given index, including from the end using negative numbers.
80. 
```javascript
console.log(["apple", "banana", "orange"].at(-1));
// 'orange'
```

### querySelector()
`querySelector()` returns the **first element** that matches a CSS selector.
81. 
```javascript
document.querySelector("button");   // tag
document.querySelector("#btn");     // ID
document.querySelector(".button");  // class
```

### querySelectorAll()
`querySelectorAll()` returns **all elements** that match a CSS selector.
82. 
```javascript
document.querySelectorAll("button");
document.querySelectorAll(".button");
```

### getElementById()
`getElementById()` finds an element by its **ID**.
83. 
```javascript
document.getElementById("btn");
```

### getElementsByClassName()
`getElementsByClassName()` finds elements by their **class name**.
84. 
```javascript
document.getElementsByClassName("button");
```

### getElementsByTagName()
`getElementsByTagName()` finds elements by their **HTML tag name**.
85. 
```javascript
document.getElementsByTagName("button");
```
