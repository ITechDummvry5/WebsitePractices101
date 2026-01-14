// mine via id

//example 1
const product1 = 10.90;
const quanty = 2;
const product2 = 20.95;

const jstotal = product1 * quanty + product2;
document.getElementById("carttotal").textContent = "$" + jstotal;  //Output $42.75

//with shipping fee
const shippinghand = 4.99;
const shiptotal = jstotal + shippinghand;
document.getElementById("shiptotal").textContent = "$" + shiptotal; //Output S47.74

//example 2
const product3 = 20.95;
const product4 = 7.99;
const quanty2 = 2;

const jstotal2 = product3 + product4 * quanty2;
document.getElementById("carttotal2").textContent = "$" + jstotal2;  //Output $36.93

//with percentages tax
const percentage = 0.1;
const percentagetotal = jstotal2 * percentage;
document.getElementById("percentage").textContent = "$" + percentagetotal; //Output $3.693


//example with Order Operation or Operation Precedence using Brackets
//using example 2
const propertotal = (product3 + product4 * quanty2) * percentage;
document.getElementById("globaltotal").textContent = "$" + propertotal; //Output $3.693

//example Counting in cent instead of dollar (Floats Solution) using example 2
const product3incent = 2095;
const product4incent = 799;

const countcent = (product3incent + product4incent) / 100;
document.getElementById("centtotal").textContent = "$" + countcent; //Output $28.94

//example  cent calculating tax  percentages using example 2
const totalroundtax = Math.round((product3incent + product4incent) * percentage) / 100;
document.getElementById("roundtotal").textContent = "$" + totalroundtax; //Output $2.89 

//Round down or RoundUp
document.getElementById("roundDown").textContent =
  Math.floor(2.8);   // 2

document.getElementById("roundUp").textContent =
  Math.ceil(2.2);    // 3

//   Convert F To C  Or C to F
    const celsius1 = 25;
    const fahrenheit1 = (celsius1 * 9/5) + 32;
    document.getElementById("temp1").textContent =
      celsius1 + "°C = " + fahrenheit1 + "°F";

const fahrenheit2 = 86;
const celsius2 = (fahrenheit2 - 32) * 5/9;
document.getElementById("temp2").textContent = fahrenheit2 + "°F = " + celsius2 + "°C";

const celsius3 = -5;
const fahrenheit3 = (celsius3 * 9/5) + 32;
    document.getElementById("temp3").textContent =
      celsius3 + "°C = " + fahrenheit3 + "°F";







//Practice 
const soup = 10;
const burger = 8;
const ice = 5;
const bqty = 3;

const totalp1 = soup + burger * bqty + ice;
document.getElementById("totalrest").textContent = "$" + totalp1; //Output $


const person = 3;
const totalp2 = totalp1 / person; 
document.getElementById("totalrest1").textContent = "$" + totalp2; //Output $

const toaster = 18.50;
const shirt = 7.59;
const sqty = 2;

const totalp3 = toaster + shirt * 2;
document.getElementById("totalrest2").textContent = "$" + totalp3; //Output $3.37

const percentagep3 = 0.1
const totalp4 = totalp3 * percentagep3;
document.getElementById("totalrest3").textContent = "$" + totalp4.toFixed(2); //Output $3.37

// cent are apply
const percenttax = 0.2;
const toactercent =  1850;
const shirtcent =  759;
const totalqty = 2

const qtotal = shirtcent * totalqty;
const totalp5 =  Math.round((toactercent + qtotal) * percenttax) / 100;
document.getElementById("totalrest4").textContent = "$" + totalp5; //Output $6.74

const toastercent = 4793;

const totaltoastercent = toastercent / 100;
document.getElementById("totalrest5").textContent = "$" + totaltoastercent; //Output $47.93

const shippingstart = 499; // in cents
const shippingdollars = shippingstart / 100;

// total befor tax and ship
const befortax = (totaltoastercent + shippingdollars);
document.getElementById("totalrest6").textContent = "$" + befortax.toFixed(2); // output $52.92

const taxpercentage = 0.1;
const befortaxCents = Math.round(befortax * 100); // convert to cents
const withtaxCents = Math.round(befortaxCents * taxpercentage) / 100 ; // tax in cents
// withtacCents  convert in to dollar  Like it Back Into
document.getElementById("totalrest7").textContent = "$" + (withtaxCents).toFixed(2);// output $5.29

//Calculate Order total with total item shipp and tax
const totalorderbottom = befortax + withtaxCents; // subtotal + tax
document.getElementById("totalrest8").textContent = "$" + totalorderbottom.toFixed(2); // $58.21



