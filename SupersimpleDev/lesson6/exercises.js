/***********************
  1️⃣ TYPEOF (Console Only)
************************/

// Check the data type of boolean values
console.log(typeof true);   // Output: "boolean" → true is a boolean
console.log(typeof false);  // Output: "boolean" → false is a boolean

// Comma operator returns the last value in parentheses
console.log(typeof ('false', 'true')); // Output: "string" → 'true' is evaluated last


/***********************
  2️⃣ COMPARISON (HTML Output)
************************/

const n1 = 5;
const n2 = 4;

// Example 1: Greater than (>) → checks if n1 > n2
const result = n1 > n2; // 5 > 4 → true
document.getElementById('ex1').textContent =
  `n1 = 5 greater than n2 = 4 → ${result}`;

// Example 2: Loose equality (==) → compares only value, ignores type
const result1 = n1 == '5'; // true because '5' is converted to number 5
document.getElementById('ex2').textContent =
  `Values are equal (== ignores data type) → ${result1}`;

// Example 3: Strict equality (===) → compares value AND type
const result2 = n1 === '5'; // false because number !== string
document.getElementById('ex3').textContent =
  `Value and data type must match (===) → ${result2}`;


/***********************
  3️⃣ MORE COMPARISONS (Console Only)
************************/

console.log(n1 != '5');   // false → loose not equal ignores type
console.log(n1 !== '5');  // true → strict not equal checks type
console.log(4 + 2 > n1);  // true → 6 > 5


/***********************
  4️⃣ IF STATEMENTS
************************/

// 🔹 Basic true example
if (true) {
  console.log('Hello'); // Runs because condition is true
} else {
  console.log('World');
}

// 🔹 Basic false example
if (false) {
  console.log('Hello');
} else {
  console.log('World'); // Runs because condition is false
}

// 🔹 Advanced comparison example
if (n1 > 6) { 
  console.log('6 is greater than 5 / True');
} else {
  console.log('5 is not greater than 6 / False'); // Runs → 5 > 6 is false
}

if (n1 > 4) { 
  console.log('5 is greater than 4 / True'); // Runs → 5 > 4 is true
} else {
  console.log('5 is not greater than 4 / False');
}

// 🔹 Else-if example: Assigning Grades
let score = 95;

if (score >= 90) {
    console.log("Grade A");          // Runs → 95 >= 90
    console.log("Congratulations");  // Additional message for top grade
} else if (score >= 70) {
    console.log("Grade B");          // Not run → first condition already true
} else {
    console.log("Grade C");          // Not run
}

// 🔹 Else-if example: Driving Eligibility
let driveAge = 18;

if (driveAge >= 30) {
    console.log("You can drive");        
    console.log("Pro Driver");  // Not run → age < 30
} else if (driveAge >= 18) {
    console.log("You can drive");    // Runs → age >= 18
    console.log("Beginner Driver"); // Additional Message for Driver
} else {
    console.log("Minor - You cannot drive yet"); // Not run
}


/***********************
  5️⃣ MULTIPLE CONDITIONS USING AND (&&)
************************/

// Condition passes only if BOTH sub-conditions are true

// Case AND 1: Age < 18 (False) AND has license (True)
let andAge1 = 17;
let andHasLicense1 = true;

if (andAge1 >= 18 && andHasLicense1) {
    console.log("Case AND 1: You can legally drive"); // Won't run → age < 18 false
} else {
    console.log("Case AND 1: You cannot drive legally"); // Runs
}

// Case AND 2: Age >= 18 (True) AND has license (True)
let andAge2 = 20;
let andHasLicense2 = true;

if (andAge2 >= 18 && andHasLicense2) {
    console.log("Case AND 2: You can legally drive"); // Runs → both conditions true
} else {
    console.log("Case AND 2: You cannot drive legally");
}


/***********************
  6️⃣ MULTIPLE CONDITIONS USING OR (||)
************************/

// Condition passes if AT LEAST ONE sub-condition is true

// Case OR 0: Age >= 18 (True) OR has parental consent (True)
let orAge0 = 20;
let orParentalConsent0 = true;

if (orAge0 >= 18 || orParentalConsent0) {
    console.log("Case OR 0: You are eligible to take the exam"); // Runs → age >= 18
} else {
    console.log("Case OR 0: You are NOT eligible to take the exam");
}

// Case OR 1: Age < 18 (False) OR has parental consent (True)
let orAge1 = 16;
let orParentalConsent1 = true;

if (orAge1 >= 18 || orParentalConsent1) {
    console.log("Case OR 1: You are eligible to take the exam"); // Runs → parental consent true
} else {
    console.log("Case OR 1: You are NOT eligible to take the exam");
}

// Case OR 2: Age < 18 (False) OR no parental consent (False)
let orAge2 = 15;
let orParentalConsent2 = false;

if (orAge2 >= 18 || orParentalConsent2) {
    console.log("Case OR 2: You are eligible to take the exam"); // Won't run → both false
} else {
    console.log("Case OR 2: You are NOT eligible to take the exam"); // Runs
}
