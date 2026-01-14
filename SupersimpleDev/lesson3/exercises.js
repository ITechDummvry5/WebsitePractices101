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