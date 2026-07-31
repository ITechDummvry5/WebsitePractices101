/* ============================================================
   PROBLEM: Static Function (not dynamic)
   ============================================================ */

function calculateTax() {
    console.log(1000 * 0.1); // only works for 1000
}
calculateTax();


/* ============================================================
   SOLUTION: Dynamic Function using Parameters
   ============================================================ */

function altercalculateTax(income) {
    console.log(income * 0.1); // works for any value
}
altercalculateTax(4000); // 4000 is the argument
altercalculateTax(5000);


/* ============================================================
   EXAMPLE: Parameter vs Argument
   ============================================================ */

function Example(incomeParameter) { // incomeParameter = parameter
    console.log(incomeParameter + 1);
}
Example(10); // 10 = argument
Example(20); // 20 = argument

/* ============================================================
   DEVELOPER TERMINOLOGY
   ============================================================

   DEFINED with a parameter Developer say → "This function takes a parameter."
   function calculateTax(income) { }  → "income" is the parameter. - NOTE This is LINE 15

   CALLED with a value  Developer say → "We are passing an argument."
   altercalculateTax(4000);  → 4000 is the argument.
   ============================================================ */


/* ============================================================
   Basic Example of a Function and Parameters using the alert() function
   ============================================================ */

function alert(message) {
    console.log(message);
}
alert("hello world");

/* BREAKDOWN:
   function      = keyword
   alert         = function name
   message       = parameter
   "hello world" = argument */


/* ============================================================
   MULTIPLE PARAMETERS. Note : "" = space only
   ============================================================ */

function multiplePet(dog, cat, fish) {
    console.log(dog + " " + cat + " " + fish);
}
multiplePet("Pitbull", "Whiskers", "Nemo");
// dog = "Pitbull" | cat = "Whiskers" | fish = "Nemo"

// Another example 

function introduce(firstName, age, city) {
    console.log(firstName + " is " + age + " years old and lives in " + city);
}
introduce("Alice", 25, "Tokyo");

/* ============================================================
   DEFAULT VALUE PARAMETER + MULTIPLE PARAMETERS
   ============================================================ */

function multipleCalculate(cost, percent = 0.1) {
    console.log(cost * percent);
}
multipleCalculate(1000);       // 1000 * 0.1 = 100 → no second argument, uses default
multipleCalculate(1000, 0.2);  // 1000 * 0.2 = 200 → second argument passed, overrides default

/* RULE:
   Default Parameter ->  = 0.1
   No argument passed -> uses default value (0.1)
   Argument passed    -> overrides default  (0.2)  */