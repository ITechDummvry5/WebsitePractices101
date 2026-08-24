// ============================================================
// BASIC DOM PROPERTIES
// ============================================================

// document.body gives us the <body> element.

// Change everything inside <body> to plain text.
// document.body.innerHTML = 'Hello World';

// Change everything inside <body> to HTML.
// document.body.innerHTML = '<p>World Wide Web</p>';

// Show the <body> element in the console.
// console.log(document.body);

// Show the HTML inside <body>.
// console.log(document.body.innerHTML);


// ============================================================
// DOCUMENT TITLE
// ============================================================

// Change the text shown in the browser tab.
// document.title = 'Tab Title Changed DOM Manipulation';

// Read the current browser tab title.
// console.log(document.title);


// ============================================================
// TYPE CHECKING
// ============================================================

// Check the type of the HTML inside <body>.
// console.log(typeof document.body.innerHTML);
// Output: "string"

// Check the type of the document object.
// console.log(typeof document);
// Output: "object"

// Check the type of the document title.
// console.log(typeof document.title);
// Output: "string"



// ============================================================
// BASIC OBJECT METHODS vs DOM METHODS
// ============================================================

console.log('=========== BASIC OBJECT METHODS vs DOM METHODS ===========');


// ------------------------------------------------------------
// 1. NORMAL JAVASCRIPT OBJECT
// ------------------------------------------------------------

// This is a normal object that we created ourselves.

const ObjectMethod = {

    name: 'Selena',
    role: 'Assassin',

    // This is a method inside our object.
    activateSkill() {
        console.log('Skill activated!');
    }
};


// Call our object's method.
ObjectMethod.activateSkill();

// Output:
// Skill activated!


// ------------------------------------------------------------
// 2. DOM METHOD
// ------------------------------------------------------------

// document.getElementById() is a built-in DOM method.
//
// It searches the HTML page for an element with this ID.

const showDomMethod = document.getElementById('selenadomButton');

console.log(showDomMethod);

// Example output:
// <button id="domButton">DOM Methods</button>


/* ============================================================
   EXPLANATION
============================================================ */

// ObjectMethod.activateSkill()
// → A method that belongs to our normal JavaScript object.
//
// document.getElementById()
// → A built-in DOM method used to find an HTML element.
//
// IMPORTANT:
//
// Normal object:
// object.method()
//
// DOM:
// document.method()



// ============================================================
// DOM ACCESS METHODS
// ============================================================

console.log('=========== DOM ACCESS METHODS ===========');


// ------------------------------------------------------------
// 1. querySelector()
// ------------------------------------------------------------

// querySelector() uses a CSS selector.
//
// It returns the FIRST matching element.

const domAccessMethod = document.querySelector('p');

console.log(domAccessMethod);

// Example:
// <p>This is a simple paragraph.</p>


// ------------------------------------------------------------
// 2. getElementsByClassName()
// ------------------------------------------------------------

// Finds ALL elements with this class name.
//
// IMPORTANT:
// Do NOT put "." before the class name.
//
// Correct:
// getElementsByClassName('domClassButton')
//
// Not:
// getElementsByClassName('.domClassButton')

const domAccessMethod2 =
    document.getElementsByClassName('domClassButton');

console.log(domAccessMethod2);

// Example:
// HTMLCollection(1) [button.domClassButton]


// ------------------------------------------------------------
// 3. getElementsByTagName()
// ------------------------------------------------------------

// Finds ALL elements with this HTML tag name.
//
// Here we are finding every <button>.

const domAccessMethod3 =
    document.getElementsByTagName('button');

console.log(domAccessMethod3);

// Example:
// HTMLCollection(3) [button, button, button]


// ------------------------------------------------------------
// 4. getElementById()
// ------------------------------------------------------------

// Finds ONE element using its ID.

const domAccessMethod4 =
    document.getElementById('domIdButton');

console.log(domAccessMethod4);

// Example:
// <button id="domIdButton">DOM ID</button>


/* ============================================================
   EXPLANATION
============================================================ */

// querySelector()
// → First matching element
//
// getElementById()
// → One element with the specified ID
//
// getElementsByClassName()
// → Collection of matching elements
//
// getElementsByTagName()
// → Collection of matching elements
//
// Think:
//
// ONE
// ↓
// querySelector()
// getElementById()
//
// MANY
// ↓
// getElementsByClassName()
// getElementsByTagName()



// ============================================================
// DOM CHANGE: innerHTML
// ============================================================

console.log('=========== DOM CHANGE: innerHTML ===========');


// ------------------------------------------------------------
// READ innerHTML
// ------------------------------------------------------------

// Find the <h3> and read its content.

console.log(document.querySelector('h3').innerHTML);


// ------------------------------------------------------------
// CHANGE innerHTML
// ------------------------------------------------------------

// Find the <h3> and replace its content.

document.querySelector('h3').innerHTML =
    'Changed heading inside the h3 element.';


// ------------------------------------------------------------
// FIND AN ELEMENT BY CLASS
// ------------------------------------------------------------

// querySelector() can also find an element by class.
//
// "." means CLASS.

console.log(document.querySelector('.js-button'));


/* ============================================================
   EXPLANATION
============================================================ */

// innerHTML can:
//
// 1. READ the HTML inside an element.
//
// element.innerHTML
//
// 2. CHANGE the HTML inside an element.
//
// element.innerHTML = 'New content';
//
// querySelector('.js-button')
// → finds the FIRST element with class "js-button".



// ============================================================
// DOM COLLECTIONS & INDEX ACCESS
// ============================================================

console.log('=========== DOM COLLECTIONS & INDEX ACCESS ===========');


// ------------------------------------------------------------
// 1. SINGLE ELEMENT
// ------------------------------------------------------------

// getElementById() finds ONE specific element.
//
// Because we get one element directly,
// we do NOT need [0].

const singleButton =
    document.getElementById('domButton');

console.log(singleButton);

// Example:
// <button id="domButton">Click Me</button>



// ------------------------------------------------------------
// 2. COLLECTION
// ------------------------------------------------------------

// querySelectorAll() finds ALL matching elements.
//
// If the page has 4 buttons:
//
// allButtons
//     ↓
// [ button, button, button, button ]
//
// This is a NodeList.

const allButtons =
    document.querySelectorAll('button');

console.log(allButtons);


// ------------------------------------------------------------
// 3. COLLECTION LENGTH
// ------------------------------------------------------------

// .length tells us how MANY elements are inside
// the collection.
//
// If there are 4 buttons:
//
// allButtons.length
//     ↓
//     4

console.log(allButtons.length);


// ------------------------------------------------------------
// 4. INDEX ACCESS
// ------------------------------------------------------------

// We can use an index to access ONE item
// from the collection.
//
// IMPORTANT:
// JavaScript starts counting at 0.
//
// [0] → first button
// [1] → second button
// [2] → third button
// [3] → fourth button

console.log(allButtons[0]); // First button
console.log(allButtons[1]); // Second button
console.log(allButtons[2]); // Third button
console.log(allButtons[3]); // Fourth button



// ------------------------------------------------------------
// 5. LOOP THROUGH THE COLLECTION
// ------------------------------------------------------------

// Instead of writing:
//
// allButtons[0]
// allButtons[1]
// allButtons[2]
// allButtons[3]
//
// We can use a loop.
//
// i starts at 0
// i increases by 1
// loop stops when i reaches allButtons.length

for (let i = 0; i < allButtons.length; i++) {

    // allButtons[i]
    //
    // means:
    // "Get the button at the current index."

    allButtons[i].textContent =
        `Button ${i}`;

    // Show the current button in the console.

    console.log(allButtons[i]);
}


/* ============================================================
   EXPLANATION
============================================================ */

// COLLECTION
// → A group of multiple elements.
//
// Example:
//
// allButtons
// ↓
// [button, button, button, button]
//
//
// INDEX
// → The position of an item.
//
// [0] → first
// [1] → second
// [2] → third
// [3] → fourth
//
//
// LENGTH
// → Number of items in the collection.
//
// allButtons.length
// → 4
//
//
// LOOP
// → Lets us go through every item automatically.
//
// for (let i = 0; i < allButtons.length; i++)
//
// i = 0 → allButtons[0]
// i = 1 → allButtons[1]
// i = 2 → allButtons[2]
// i = 3 → allButtons[3]