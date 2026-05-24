const v1 = 'basic example to store variable';
console.log(v1);
document.getElementById("vr1").textContent = v1;

 v2 = 2;
document.getElementById("vr2").textContent = v2;
console.log(v2); // output 2

document.getElementById("vr3").textContent = v2 + 2;
console.log(v2 + 2); // output 4

let result = v2 + 8; 
document.getElementById("vr4").textContent = result;
console.log(result); // output 10

v2 = 5;
document.getElementById("vr5").textContent = v2; 
console.log(v2); // output 5  

// Notice:
// At the top, v2 = 2 → assigning a value
// At the bottom, v2 = 5 → re-assigning a value

// Const is Create A variable That cant change later
const noChange = 67 + 3;
document.getElementById("vr5").textContent = noChange; 
console.log(noChange); // output 70

const Nochangeresult = noChange + 5;
document.getElementById("vr5").textContent = Nochangeresult; 
console.log(Nochangeresult); // output 75

// var
var var3 = 8;
console.log(var3); // output 8


// Practical Exercises
let cartQty = 0;

// Show quantity button
let showQtyBtn = document.getElementById("showQty");
showQtyBtn.addEventListener("click", function () {
  alert(`Show Cart Quantity is ${cartQty}`);
});

// Decrease quantity button
let negativeQtyBtn = document.getElementById("NegativeQty");
negativeQtyBtn.addEventListener("click", function () {
  // cartQty = cartQty - 1;
  // or Shorter Version 
  cartQty--;
  alert(`Cart Quantity is ${cartQty}`);
});

// Reset quantity button
let resetQtyBtn = document.getElementById("resetQty");
resetQtyBtn.addEventListener("click", function () {
  cartQty = 0;
  alert(`Reset Quantity is ${cartQty}`);
});


// Custom
let displayQty = 0;

// Cache DOM elements
const plus1Btn = document.getElementById("plus1");
const minus1Btn = document.getElementById("minus1");
const display = document.querySelector(".display");

// Function to update display
function updateDisplay() {
  display.textContent = displayQty;
}

// Decrease quantity
minus1Btn.addEventListener("click", () => {
  if (displayQty > 0) {
    displayQty -= 1;
  }
  updateDisplay();
});

// Increase quantity
plus1Btn.addEventListener("click", () => {
  displayQty += 1;
  updateDisplay();
});

/*
  OPTIONAL:
  - If your HTML already has an initial value like:
      <span class="display">0</span>
    then you can REMOVE the line below.

  - If your HTML does NOT have an initial value like:
      <span class="display"></span>
    then UNCOMMENT the line below to show 0 on page load.

*/
  // updateDisplay();


  // practical Exercise

  const name = "charles andrei ignacio";
  console.log(`My name is ${name}`);

const coffee = 5;
const bagel = 3;
const soup = 9;

const cost = coffee + soup + (bagel * 2);
console.log(cost);

console.log(`Cost of Food : $${cost}`);

const tax = 0.1;
const calculate = cost * tax;
console.log(`Tax Cost is ${calculate}`);


let userinputnumber = "";
let firstNumber = 0;
let secondNumber = 0;
let userOperator = null;
let resultcalculation = 0;

const displayInput = document.getElementById("displayCalculation");
const numbers = document.querySelectorAll(".num");
const operatorBtn = document.querySelectorAll(".operator");
const equalBtn = document.getElementById("equal");
const clearbtn = document.getElementById("clear");

// Number buttons
numbers.forEach(numBtn => {
  numBtn.addEventListener('click', () => {
    userinputnumber += numBtn.textContent;
    displayInput.value = userinputnumber;
  });
});

// Operator buttons (+, -, *, /)
operatorBtn.forEach(opBtn => {
  opBtn.addEventListener('click', () => {
    if (userinputnumber === "" && resultcalculation === 0) return;

    // Use the result as firstNumber if user just finished a calculation
    firstNumber = userinputnumber !== "" ? Number(userinputnumber) : resultcalculation;

    userOperator = opBtn.textContent; // store the operator
    userinputnumber = "";             // ready for next number
  });
});

// Equals button
equalBtn.addEventListener('click', () => {
  if (userOperator === null || userinputnumber === "") return;

   secondNumber = Number(userinputnumber);

  switch (userOperator) {
    case "+": resultcalculation = firstNumber + secondNumber; break;
    case "-": resultcalculation = firstNumber - secondNumber; break;
    case "*": resultcalculation = firstNumber * secondNumber; break;
    case "/": 
      if (secondNumber === 0) {
        alert(`Hey ${name}, Dividing SecondNumber Cannot be zero! `);
        return;
      }
      resultcalculation = firstNumber / secondNumber; 
      break;
  }

  displayInput.value = resultcalculation;

  // Prepare for next calculation: result becomes firstNumber
  firstNumber = resultcalculation;
  userinputnumber = "";
  userOperator = null; // wait for user to pick a new operator
});

// Clear button
clearbtn.addEventListener("click", () => {
  userinputnumber = "";
  firstNumber = 0;
  userOperator = null;
  resultcalculation = 0;
  displayInput.value = "";
});
