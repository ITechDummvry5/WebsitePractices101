 //TypeOF using
 document.getElementById("typeOf").innerHTML =
    "1 is: " + typeof 1 + "<br>" +
    "'hello' is: " + typeof "hello";

  // Example 1: String Basic 
const result1 = 'Hello';
document.getElementById("example1").textContent =
  "Example 1  → " + result1;

  // Example 2: String + String (Concatenation)
const result2 = 'Hello' + 'World';
document.getElementById("example2").textContent =
  "Example 2 - 'Hello' + 'World' → " + result2;

  // Example 3: String + Number (Type Coercion)
const result3 = 'Hello' + 2;
document.getElementById("example3").textContent =
  "Example 3 - 'Hello' + 2 → " + result3;


  // Practical 1: Using ToFixed(2)
const Pstring1 = '$';
const Pnumber1 = 20.95;
const Pnumber2 = 7.99;
// const result4 = Pstring1 + Pnumber1 + Pnumber2;              //Output1  =  $20.957.99
const result4 =   Pstring1 + (Pnumber1 + Pnumber2).toFixed(2);  //Output2  =  $28.94
document.getElementById("practical1").textContent = "Practical 1 " + result4; 

  // Practical 1A: Alternative  using Convert Dollar into Cent Then Convert cent into Dollar using / 100:
const PAstring1 = '$';
const PAnumber1 = 2095;
const PAnumber2 = 799;
const result4A =   PAstring1 + (PAnumber1 + PAnumber2) / 100;  //Output2A  = Practical 1 Alternative $28.94
document.getElementById("practical1A").textContent = "Practical 1 Alternative " + result4A; 

  // Practical 2: Using The Output of Practical1 Alternative $28.94
const P2string1 = 'Items';
const Pqty = 2;
const result5 = P2string1 + " (" + Pqty + ") : " + result4A ;  //Output3 = Practical 2 Items (2) : $28.94
document.getElementById("practical2").textContent = "Practical 2 " + result5; 

  //Practical 4 Interpolation methods more modern then Practical 2 it cant directly apply the resul5 because its a string already Items (2) : $28.94
const addnumber = (PAnumber1 + PAnumber2) / 100; // using this numbers not string  it can add
const addnumber1 = 50;
const result6 = `${P2string1} (${Pqty}): ${Pstring1} ${addnumber+addnumber1}`; //Output4 Practical 4 Items (2) : $78.94
document.getElementById("practical4").textContent = "Practical 4 " + result6; 


const multilinestrings = `Hello,
Welcome to JavaScript and HTML.
This is a multi-line string.`;
    document.getElementById("practical5").textContent = multilinestrings;


    // Practical 3: 4 Ways to create Strings with Escapes
// 1 Single quotes
const singleDefault = 'Its correct to use single quotes here'; 
const singleWithEscape = 'It\'s using backslash to escape single quote'; 
// 2 Double quotes
const doubleDefault = "It's correct to use double quotes here"; 
const doubleWithEscape = "He said, \"Hello World!\""; 
// 3 Template strings
const templateLiteral = `You can use 'single' and "double" quotes without escape`; //Output3
document.getElementById("practical3").innerHTML =
  "Single quotes (default): " + singleDefault + "<br>" +
  "Single quotes (with \\ escape): " + singleWithEscape + "<br><br>" +
  "Double quotes (default): " + doubleDefault + "<br>" +
  "Double quotes (with \\ escape): " + doubleWithEscape + "<br><br>" +
  "Template literal (default): " + templateLiteral + "<br>";


// Exercises 

//basic string 01
const intro = 'My name is: ';
const myname = 'Charles Andrei Ignacio';
    // type of check
    // console.log(typeof intro);   // string
    // console.log(typeof myname);  // string
const stringname =  intro + myname;
    // console.log(typeof stringname); // string
document.getElementById("exercises1").textContent = stringname;

//using concatenation  02
const coffee = 5;
const bagel =3;
const cost = 'Total cost :';
const dollarsign = '$';
const stringname1 = cost + dollarsign + (coffee + bagel);
document.getElementById("exercises2").textContent = stringname1;

//using template String and Type of Checking uncomment it  03
const templatestring = `Total cost : $${coffee + bagel}`;
    // document.getElementById("exercises3").innerHTML = "Type of" + typeof templatestring;
document.getElementById("exercises3").textContent = templatestring;

// Uncomment it but its exercises 04
// alert(templatestring);

//using Interpolation  05 Best Practices 
const basketballs = 2095;
const tshirts = 799;
const qty = 2;
const sign = "$";
const stringitems = "Items";
const numberitems = 4;
// calculate total safely
const total = (Number(basketballs) + Number(tshirts)) * Number(qty) / 100;
// display with template string
const stringname2 = `${stringitems} (${numberitems}): ${sign}${total}`;
document.getElementById("exercises4").textContent = stringname2;

// string and number 06
//using Interpolation  05 Best Practices
const textshipping = 'Shipping & Handling';
const costshipping = 499;
const toship = 2;
const signship = "$";
const  totalship = (Number(costshipping) * Number(toship)) / 100;
// display with template string
const stringname3 = `${textshipping}: ${signship} ${totalship}`;
document.getElementById("exercises5").textContent = stringname3;


// before tax stingname3 + stringname2 = Before tax 07
const texttax = 'Total Before Tax';
// display with template string
const stringname4 = `${texttax}: $${totalship + total}`;
document.getElementById("exercises6").textContent = stringname4;

// Step	Value
// totalship + total	67.86 (dollars)
// multiply by percenttax	6.786 (dollars)
// multiply by 100	678.6 (cents)
// Math.round()	679 (cents)
// divide by 100	6.79 (dollars) 
const percenttax = 0.1;
const taxten = 'Estimated tax (10%)';
// multiply by 100 to convert dollars to cents, round, then divide by 100
const tax = Math.round((totalship + total) * percenttax * 100) / 100;
const stringname5 = `${taxten}: $${tax}`;
document.getElementById("exercises7").textContent = stringname5;

const stringname6 =  `Orders Total :  ${(totalship + total + tax)}`;
document.getElementById("exercises8").textContent = stringname6;
