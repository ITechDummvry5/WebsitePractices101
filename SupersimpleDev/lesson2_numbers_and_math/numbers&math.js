// ===============================
// GOOD MATH EXPRESSION (WITH CONTROL)
// ===============================

const basketball = 29.99;
const football = 19.99;
const shippingFees = 5.99;
const qty = 3;
const taxRate = 0.05; // 5% tax rate

// GOOD: Use parentheses or step-by-step variables for clarity and correct calculation

const basketballTotal = basketball * qty;
const footballTotal = football * qty;
const itemsSubtotal = basketballTotal + footballTotal;
const totalBeforeTax = itemsSubtotal + shippingFees;
const taxAmount = totalBeforeTax * taxRate;
const totalAmountDue = totalBeforeTax + taxAmount;


console.log("GOOD - Subtotal Items:", itemsSubtotal);
console.log("GOOD - Shipping And Handling:", shippingFees);
console.log("GOOD - Total Items Before Tax:", totalBeforeTax);
console.log("GOOD - Tax Amount:", taxAmount);
console.log("GOOD - Total Amount Due:", totalAmountDue.toFixed(2)); // Format to 2 decimal places

console.log( "//==============================================");

// ==============================================
// ELECTRONICS STORE - SHOPPING CART
// Safe Money Calculations Using Cents
// ==============================================

// STEP 0: DEFINE PRODUCT PRICES (DOLLARS)
const smartphone = 7.99;
const earbuds = 20.95;

// Quantity of each product
const qtyEach = 2;

// Sales tax (10%)
const SaletaxRate = 0.10;

// ==============================================
// STEP 1: CONVERT DOLLARS TO CENTS
// ----------------------------------------------
// JavaScript uses floating-point numbers.
// Converting to whole-number cents helps avoid
// floating-point precision errors.
//
// Example:
// $7.99 → 799 cents
// $20.95 → 2095 cents
// ==============================================

const smartphoneCents = Math.round(smartphone * 100);
const earbudsCents = Math.round(earbuds * 100);

console.log("Smartphone:", smartphoneCents, "cents");
console.log("Earbuds:", earbudsCents, "cents");

// ==============================================
// STEP 2: CALCULATE ITEM TOTALS (CENTS)
// ----------------------------------------------
// Multiply each product price by its quantity.
// Calculations are done using cents.
// ==============================================

const smartphoneTotalCents = smartphoneCents * qtyEach;
const earbudsTotalCents = earbudsCents * qtyEach;

console.log("Smartphone Total:", smartphoneTotalCents, "cents");
console.log("Earbuds Total:", earbudsTotalCents, "cents");

// ==============================================
// STEP 3: CALCULATE SUBTOTAL (CENTS)
// ----------------------------------------------
// Add the totals together.
//
// Still using cents.
// ==============================================

const subtotalCents =
  smartphoneTotalCents + earbudsTotalCents;

console.log("Subtotal:", subtotalCents, "cents");

// Convert to dollars ONLY for display.

const subtotalDollars = subtotalCents / 100;

console.log(
  "Subtotal:",
  subtotalDollars.toFixed(2),
  "dollars"
);

// ==============================================
// STEP 4: CALCULATE SALES TAX
// ----------------------------------------------
// Tax is calculated from the subtotal.
//
// Math.round() is used because tax can produce
// fractional cents. Money must end as a whole
// number of cents.
// ==============================================

const taxCents = Math.round(subtotalCents * SaletaxRate);

console.log("Tax:", taxCents, "cents");

// Convert to dollars for display.

const taxDollars = taxCents / 100;

console.log(
  "Tax:",
  taxDollars.toFixed(2),
  "dollars"
);

// ==============================================
// STEP 5: CALCULATE GRAND TOTAL
// ----------------------------------------------
// Add subtotal and tax.
//
// Still working in cents.
// ==============================================

const totalCents = subtotalCents + taxCents;

console.log("Grand Total:", totalCents, "cents");

// Convert to dollars ONLY when displaying.

const totalDollars = totalCents / 100;

console.log(
  "Grand Total:",
  totalDollars.toFixed(2),
  "dollars"
);

// ==============================================
// END OF PROGRAM
// ==============================================

