### toFixed()
The toFixed() method is used to format a number to a fixed number of decimal places. It is commonly used when working with money or values that need consistent decimal formatting

1. console.log((7.7965).toFixed(2));

### typeof
The typeof operator is used to check the data type of a value in JavaScript. It helps you understand whether a value is a number, string, boolean, or another type.

2. console.log(typeof 29.99);

### Math.random()
Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).

3. console.log(Math.random());

### lenght
length is used to get the number of items in an array or characters in a string.

4. console.log(["apple", "banana", "orange"].length);

### Math.floor
Math.floor() rounds a number DOWN to the nearest whole number.

5. console.log(Math.floor(7.99));

### Math.Round
Math.round() rounds a number to the nearest whole number (up or down depending on the decimal value).

> Does it affect calculations?

6. A. YES — if you use it inside math operations
--- 
ex: 
const price = Math.round(7.49);
const total = price * 2;
console.log(total);

6. B. NO — if you only use it for display
---
ex:
const value = 7.49;
console.log(Math.round(value));

7. `;` END OF LINE CODES

### Automatic Semicolon Insertion
JavaScript will automatically add `;` at the end of lines if you forget.  
> ⚠️ This doesn't always work correctly — **always write your own semicolons**.



