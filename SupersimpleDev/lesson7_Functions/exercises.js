function calculateTax(){
    console.log(1000 * 0.1);
}
calculateTax();
/* problem is only for 1000, we need to make it dynamic using parameters */
/* A parameter is works the same way as a variable, but it is only available inside the function. */

function altercalculateTax(parameter){
    console.log(parameter * 0.1);
}
altercalculateTax(4000); 
/* altercalculateTax become Dynamic because we can pass any value to it, and it will calculate the tax for that value. */
altercalculateTax(5000);
/* We can also use multiple parameters in a function. */

