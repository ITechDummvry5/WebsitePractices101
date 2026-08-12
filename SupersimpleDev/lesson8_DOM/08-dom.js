// document.body.innerHTML = 'hello world'; 
// console.log(document.body.innerHTML); // Output: hello world
// console.log(typeof document.body.innerHTML); // Output: string
// console.log(typeof document); // Output: object
// document.title = 'Tab title changed DOM Manipulation'; 

/* ============================================================
   Explanation
============================================================ */
// 1. Comment Out For Basic DOM Manipulation And Type Checking

console.log('===========OBJECT METHODS===========');

const main = {
    name: 'Selena',
    role: 'Assassin',
    activateSkill(){
        console.log('Skill activated!');
    }  
}; 
main.activateSkill(); // Output: Skill activated!

console.log('===========DOM METHODS===========');

const showDom = document.getElementById('domButton');
console.log(showDom); // Output: <button id="domButton">DOM Methods</button>

console.log('===========DOM METHODS AND PROPERTIES===========');

console.log(document.title);
console.log(typeof document.title);
document.title = 'CHANGEDDOM Manipulation';
console.log(document.title);
console.log(typeof document.title);
/* ============================================================
   Explanation
============================================================ */
// 1. It Will Display the title in the webpage tab currently in the 08-dom.html file. <title>DOM Manipulation</title>
// 2. It Will Display the type of the title which is a string.
// 3. It Will Change the title in the webpage tab to 'CHANGEDDOM Manipulation'.
// 4. It Will Display the new title in the webpage tab.
// 5. It Will Display the type of the new title which is still a string.

