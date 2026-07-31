### toFixed()
The `toFixed()` method is used to format a number to a fixed number of decimal places. It is commonly used when working with money or values that need consistent decimal formatting.

1. 
```javascript
console.log((7.7965).toFixed(2));
```

### typeof
The `typeof` operator is used to check the data type of a value in JavaScript. It helps you understand whether a value is a number, string, boolean, or another type.

2. 
```javascript
console.log(typeof 29.99);
```

### Math.random()
`Math.random()` generates a random decimal number between `0` (inclusive) and `1` (exclusive).

3. 
```javascript
console.log(Math.random());
```

### length
`length` is used to get the number of items in an array or the number of characters in a string.

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
`Math.round()` rounds a number to the nearest whole number (up or down depending on the decimal value).

> Does it affect calculations?

6. A. YES — if you use it inside math operations

Example:
```javascript
const price = Math.round(7.49);
const total = price * 2;

console.log(total);
```

6. B. NO — if you only use it for display

Example:
```javascript
const value = 7.49;

console.log(Math.round(value));
```

### toUpperCase()
The `toUpperCase()` method is used to convert all alphabetic characters in a string to uppercase letters.

7. 
```javascript
console.log('hello'.toUpperCase());
```

### toLowerCase()
The `toLowerCase()` method is used to convert all alphabetic characters in a string to lowercase letters.

8. 
```javascript
console.log('HELLO'.toLowerCase());
```

### toString()
The `toString()` method is used to convert a value (such as a number, boolean, or array) into a string.

9. 
```javascript
console.log((123).toString());
```

### Accessing Entire Object
The object name is used to access and display the complete object, including all properties and values.

10. 
```javascript
console.log(anime);
```

### Accessing Object Property
The property name is used to access a specific value inside an object using dot notation.

11. 
```javascript
console.log(anime.protagonist);
