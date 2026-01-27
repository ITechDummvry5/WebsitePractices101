let v1 = 'basic example to store variable';
console.log(v1);
document.getElementById("vr1").textContent = v1;

let v2 = 2;
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
  cartQty = cartQty - 1;
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


