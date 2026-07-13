const nameString = "Auto";
const autoNum = 2.88;
const convertNum = 2.99;

// Bad: '+' concatenates after the first string.
// Numbers are automatically converted to strings.
const autoConvert = nameString + autoNum + convertNum;

console.log(autoConvert);        // "Auto2.882.99"
console.log(typeof autoConvert); // string

console.log("//==============================================");

const brandModel = "iPhone";
const brandPrice = 400;
const brandOff = 50;

// Good: Parentheses perform the math before concatenation.
const correctMethod = brandModel + (brandPrice - brandOff);

console.log(correctMethod);        // "iPhone350"
console.log(typeof correctMethod); // string

console.log("//==============================================");

const carModel = "TOYOTA";
const carPrice = 90.88;
const carGasoline = 3.99;

// Bad: Floating-point math can produce precision errors.
// 90.88 + 3.99 = 94.86999999999999
const carResult = carModel + (carPrice + carGasoline);

console.log(carResult);        // TOYOTA94.86999999999999
console.log(typeof carResult); // string

console.log("//==============================================");

// Good: Convert to cents, calculate, then convert back.
const carPriceCents = Math.round(carPrice * 100);
const carGasolineCents = Math.round(carGasoline * 100);

const totalCents = carPriceCents + carGasolineCents; // cents
const totalDollars = totalCents / 100; // convert back to dollars

const correctResult = carModel + totalDollars.toFixed(2);

console.log(correctResult);        // TOYOTA94.87
console.log(typeof correctResult); // string

console.log("//==============================================");
