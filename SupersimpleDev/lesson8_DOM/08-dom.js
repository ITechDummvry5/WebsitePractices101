    // document.body.innerHTML = 'hello world';
    // document.body.innerHTML = '<p>World Wide Web</p>';
    // console.log(document.body);
    // console.log(document.body.innerHTML);

    // document.title = 'Tab title changed DOM Manipulation';
    // console.log(document.title);

    // console.log(typeof document.body.innerHTML);
    // console.log(typeof document);
    // console.log(typeof document.title);


   console.log('=========== BASIC OBJECT METHODS vs DOM METHODS===========');

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
   EXPLANATION
============================================================ */
// 1. ObjectMethod is a plain object you made, with its own method activateSkill.
// 2. getElementById is a built-in DOM method that finds a real element on the page.


console.log('===========DOM Access Methods===========');

const domAccessMethod = document.querySelector('p');
console.log(domAccessMethod); // Output: <p>This is a simple paragraph.</p>

const domAccessMethod2 = document.getElementsByClassName('domClassButton');
console.log(domAccessMethod2); // Output: HTMLCollection(1) [button.domClassButton]

const domAccessMethod3 = document.getElementsByTagName('button');
console.log(domAccessMethod3); // Output: HTMLCollection(3) [button#domButton, button.domClassButton, button#domIdButton]

const domAccessMethod4 = document.getElementById('domIdButton');
console.log(domAccessMethod4); // Output: <button id="domIdButton">DOM ID</button>

/* ============================================================
   EXPLANATION
============================================================ */
// 1. querySelector() and getElementById() return a single element.
// 2. getElementsByClassName() and getElementsByTagName() return a collection (HTMLCollection).


console.log('===========DOM Change InnerHTML===========');

console.log(document.querySelector('h3').innerHTML);
document.querySelector('h3')
    .innerHTML = 'Changed heading inside the h3 element.';

console.log(document.querySelector('.js-button'));

/* ============================================================
   EXPLANATION
============================================================ */
// 1. innerHTML reads or changes the HTML content inside an element.
// 2. querySelector('.js-button') finds the first element with class "js-button".


console.log('=========== DOM Collections & Index Access ===========');

const singleButton = document.getElementById('domButton');
console.log(singleButton); // single element, no index needed

const allButtons = document.querySelectorAll('button');
console.log(allButtons);        // NodeList(4) [button, button, button]
console.log(allButtons.length); // 4

console.log(allButtons[0]); // first button
console.log(allButtons[1]); // second button
console.log(allButtons[2]); // third button

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].textContent = `Button ${i}`;
}

/* ============================================================
   EXPLANATION
============================================================ */
// 1. Collections (from querySelectorAll, getElementsBy...) need an index like [0] to get one item.
// 2. .length tells you how many items are in the collection.
// 3. A for loop lets you change every item using its index.