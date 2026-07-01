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

// ELECTRONICS STORE - SHOPPING CART FLOW (GOOD EXAMPLE - CENTS-BASED SAFE MATH And using Math.round And Tofixed)

const smartphone = 7.99; // price of smartphone in dollars
const earbuds = 20.95; // price of earbuds in dollars

const qtyEach = 2; // quantity for each product

const electronicTaxRate = 0.1; // 10% electronics tax

// STEP 1: CONVERT PRICES TO CENTS
const smartphoneCents = Math.round(smartphone * 100); // convert smartphone price to cents
const earbudsCents = Math.round(earbuds * 100); // convert earbuds price to cents

// STEP 2: APPLY QUANTITY
const smartphoneTotalCents = smartphoneCents * qtyEach; // total cost for smartphones in cents
const earbudsTotalCents = earbudsCents * qtyEach; // total cost for earbuds in cents

// STEP 3: CALCULATE SUBTOTAL (CENTS)
const subtotalCents = smartphoneTotalCents + earbudsTotalCents; // add both items in cents
const subtotalDollars = subtotalCents / 100; // convert subtotal to dollars for display only

console.log("Subtotal (Cents):", subtotalCents); // log subtotal in cents
console.log("Subtotal (Dollars):", subtotalDollars.toFixed(2)); // log subtotal in dollars

// STEP 4: CALCULATE ELECTRONICS TAX
const electronicTaxCents = Math.round(subtotalCents * electronicTaxRate); // compute tax in cents

const electronicTaxDollars = electronicTaxCents / 100; // convert tax to dollars for display

console.log("Electronics Tax (Cents):", electronicTaxCents); // log tax in cents
console.log("Electronics Tax (Dollars):", electronicTaxDollars.toFixed(2)); // log tax in dollars

// STEP 5: FINAL TOTAL
const totalCents = subtotalCents + electronicTaxCents; // final total in cents

const totalDollars = totalCents / 100; // convert final total to dollars

console.log("TOTAL (Cents):", totalCents); // log final total in cents
console.log("TOTAL (Dollars):", totalDollars.toFixed(2)); // log final total in dollars

console.log( "//==============================================");

