// document.body.innerHTML = 'hello world';  
// document.body.innerHTML = '<p>World Wide Web</p>';  
// console.log(document.body);
// console.log(document.body.innerHTML); 

// document.title = 'Tab title changed DOM Manipulation';
// console.log(document.title); 

// console.log(typeof document.body.innerHTML); 
// console.log(typeof document); 
// console.log(typeof document.title);

/* ============================================================
   Explanation
============================================================ */
// 1.  The code demonstrates how to manipulate the DOM (Document Object Model) using JavaScript.
// 2.  If both lines are executed, the second one will be what you see.
// 2.1 Change the innerHTML of the body to '<p>World Wide Web</p>' and log it to the console.
// 3.  Change the document title to 'Tab title changed DOM Manipulation' and log it to the console.
// 4.  Log the types of document.body.innerHTML, document, and document.title to the console.
// 5. Types of document.body.innerHTML, document, and document.title are logged to the console to demonstrate their data types.

console.log('===========OBJECT METHODS vs DOM METHODS===========');

const ObjectMethod = {
    name: 'Selena',
    role: 'Assassin',
    activateSkill(){
        console.log('Skill activated!');
    }  
}; 
ObjectMethod.activateSkill(); // Output: Skill activated!

const showDomMethod = document.getElementById('domButton');
console.log(showDomMethod); // Output: <button id="domButton">DOM Methods</button>

/* ============================================================
    Explanation
============================================================ */
// 1. The code demonstrates the difference between object methods and DOM methods in JavaScript.
// 2. An object named ObjectMethod is created with properties name and role, and a method activateSkill that logs 'Skill activated!' to the console.
// 3. The activateSkill method is called, which outputs 'Skill activated!' to the console.
// 4. A DOM method getElementById is used to select the button element with the id 'domButton' and store it in the variable showDomMethod.
// 5. The showDomMethod variable is logged to the console, which outputs the button element.

console.log('===========DOM Access Methods===========');

const domAccessMethod = document.querySelector('p');
console.log(domAccessMethod); // Output: <p>This is a simple paragraph.</p>

const domAccessMethod2 = document.getElementsByClassName('domClassButton');
console.log(domAccessMethod2); // Output: HTMLCollection(1) [button.domClassButton]

const domAccessMethod3 = document.getElementsByTagName('button');
console.log(domAccessMethod3); // Output: HTMLCollection(4) [button#myButton, button#domButton, button.domClassButton, button#domIdButton]

const domAccessMethod4 = document.getElementById('domIdButton');
console.log(domAccessMethod4); // Output: <button id="domIdButton">DOM ID</button>

/* ============================================================
   Explanation
============================================================ */
// 1. The code demonstrates different DOM access methods in JavaScript.

console.log('===========DOM Change InnerHTML===========');

console.log(document.querySelector('h3').innerHTML);
document.querySelector('h3')
    .innerHTML = 'Changed heading inside the h3 element.';