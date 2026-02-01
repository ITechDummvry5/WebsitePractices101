//ex1
const n1 = 5;
const n2 = 4;
const result = n1 > n2; //5 is greater then 4 which is true
document.getElementById('ex1').textContent = `n1=5 greater than n2=4 `+ result;

// SyntaxRules
console.log(typeof (true));
console.log(typeof (false));
console.log(typeof ('false', 'true')); // Its string

//ex2
const result1 = n1 == '5'; //true
document.getElementById('ex2').textContent = 'values are equal, but ignores data type. ' + result1;
//ex3
const result2 = n1 === '5'; //false
document.getElementById('ex3').textContent = 'value AND data type are the same. ' + result2;

console.log(n1 != '5'); //FALSE  because it 5 is equal to 5 but not check the data type
console.log(n1 !== '5'); //TRUE  because it a string it check the data type
