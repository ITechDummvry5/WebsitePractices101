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
