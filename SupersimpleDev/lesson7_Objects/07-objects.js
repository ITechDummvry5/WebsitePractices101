const anime = {
  protagonist: 'Luffy',
  bounty: 3000000000
};
console.log(anime);
console.log(anime.protagonist);
console.log(typeof anime.bounty);


/* ============================================================
   Explanation
============================================================ */
// `anime` is an object.
// `protagonist` and `bounty` are object properties.
// Use dot notation (`.`) to access a property's value.
// `typeof anime.bounty` returns `"number"` because the value is a number.

console.log('======================');

let touch = {
  maleLead: 'Tat-chan',
  femaleLead: 'Minami',
  relation: 'Love Interest'
};

console.log(touch);
console.log(touch.maleLead, touch.relation, 'is', touch.femaleLead);

/* ============================================================
   Explanation
============================================================ */
// Objects can store multiple related values.
// Each value is accessed using dot notation.
// You can combine object properties with strings when displaying them.

console.log('======================');

touch.maleLead = 'Kat-chan';

console.log(touch);
console.log(touch.maleLead, touch.relation, 'is', touch.femaleLead);

/* ============================================================
   Explanation
============================================================ */
// Assigning a new value to an existing property updates the object.
// The old value ('Tat-chan') is replaced with the new value ('Kat-chan').

console.log('======================');

touch.hasBrother = true;

console.log(touch);
console.log('Kat-chan Twin Brother:', touch.hasBrother);

/* ============================================================
   Explanation
============================================================ */
// You can add a new property simply by assigning a value to a property name
// that doesn't already exist.

console.log('======================');

delete touch.hasBrother;

console.log(touch);
console.log(touch.hasBrother);

/* ============================================================
   Explanation
============================================================ */
// The `delete` keyword removes a property from an object.
// Accessing a deleted property returns `undefined`.

console.log('======================');

console.log(typeof touch);

/* ============================================================
   Explanation
============================================================ */
// `typeof` returns `"object"` because `touch` is an object.
// Objects are a non-primitive data type.

const manga = {
   title: 'One Piece',
  "Pre-serialized": 'March 2',

};
console.log(manga);
console.log(manga.title);
console.log(manga["Pre-serialized"]);

console.log('======================');

manga.title = 'Naruto'; 
manga["Pre-serialized"] = 'September 21';

console.log(manga);
console.log(manga.title);
console.log(manga["Pre-serialized"]);

console.log('======================'); 
manga["author-name"] = 'Masashi Kishimoto';
console.log(manga);
console.log(manga["author-name"]);

console.log('======================'); 
delete manga["author-name"];
console.log(manga);
console.log(manga["author-name"]);

/* ============================================================
   Explanation
============================================================ */
// 1. Existing properties can be updated:
//    manga.title = 'Naruto';

// 2. Bracket Notation can update properties with special characters:
//    manga["Pre-serialized"] = 'September 21';

// 3. New properties can be added:
//    manga.author = 'Masashi Kishimoto';

// 4. Properties can be deleted using the delete keyword:
//    delete manga["author-name"]; will be undefined when accessed.

console.log('======================');

const mangafire = {
   "@title_anime" : 'Kyou kara Ore wa',
   Best_friend : 'Mitsuhashi And Itou',
    lover : {
      Mitsuhashi : 'Riko',
      Itou : 'Kyoko'
   }
}
console.log(mangafire);
console.log(mangafire["@title_anime"]);
console.log(mangafire.Best_friend);

console.log(mangafire.lover.Mitsuhashi);
console.log(mangafire["lover"].Mitsuhashi);
console.log(mangafire.lover["Mitsuhashi"]);

console.log(mangafire.lover.Itou);
console.log(mangafire["lover"].Itou);
console.log(mangafire.lover["Itou"]);

/* ============================================================
   Explanation
============================================================ */
// 1. An object can contain another object inside it.
// 2. The object inside another object is called a nested object. lover : {}
// 3. Nested objects are useful for organizing related data into groups.
//
// 4. You can access nested properties using dot notation,
//    bracket notation, or a combination of both.

console.log('======== Method Shorthand (ES6) ========');

const conanCase = {
   title: 'Detective Conan',
   detective: 'Shinichi Kudo',

   investigate() {
      console.log('Investigating the mystery...');
   }
};

console.log(conanCase);
console.log(conanCase.title);
console.log(conanCase.detective);

conanCase.investigate();

// ============================================================
// Method Shorthand (ES6)
// ============================================================
// 1. `investigate()` is an object method using ES6 method shorthand.
// 2. This is the modern and concise syntax.
//
// Call:
// conanCase.investigate()


console.log('\n======== Anonymous Function Expression ========');

const conanMystery = {
   title: 'Detective Conan',
   detective: 'Shinichi Kudo',

   investigate: function () {
      console.log('Investigating the mystery...');
   }
};

console.log(conanMystery);
console.log(conanMystery.title);
console.log(conanMystery.detective);

conanMystery.investigate();

// ============================================================
// Anonymous Function Expression
// ============================================================
// 1. `investigate` is a property that stores an anonymous function.
// 2. The method is called through the property name.
//
// Call:
// conanMystery.investigate()


console.log('\n======== Named Function Expression ========');

const DetectiveConan = {
   title: 'Detective Conan',
   detective: 'Shinichi Kudo',

   fun: function DetectiveFunction() {
      console.log('Investigating the mystery...');
   }
};

console.log(DetectiveConan);
console.log(DetectiveConan.title);
console.log(DetectiveConan.detective);

DetectiveConan.fun();

// ============================================================
// Named Function Expression
// ============================================================
// 1. `fun` is a property that stores a named function.
// 2. `DetectiveFunction` is the function's internal name.
// 3. The method is called through the property name.
//
// Call:
// DetectiveConan.fun()

console.log('======================');

console.log(typeof console);
console.log(typeof console.log);
// ============================================================
// Explanation: Type of console and console.log
// ============================================================
// `console` is an object.
// `console.log` is a function that is a property of the `console` object.
// It is provided by the JavaScript environment (like browsers or Node.js) and is used for logging messages to the console.

console.log('==========JAVASCRIPT VALUES to JSON String============');

console.log(JSON.stringify(mangafire));
console.log(typeof JSON.stringify(mangafire));

// or
// const JavascriptInJson = JSON.stringify(mangafire);
// console.log(JavascriptInJson);
// console.log(typeof JavascriptInJson);

// ============================================================
// Explanation : JSON.stringify() Convert Javascript Value to JSON String
// ============================================================
// Flow:
// JavaScript Value
// ↓
// JSON.stringify()
// ↓
// JSON String -typeof JSON.stringify(mangafire) returns "string"

console.log('==========JSON String to Javascript Value============');

const jsonString = JSON.stringify(mangafire);
const javascriptObject = JSON.parse(jsonString);

console.log(javascriptObject);   
console.log(typeof javascriptObject);

// ============================================================
// Explanation : JSON.parse() Convert JSON String to Javascript Value
// ============================================================
// Flow:
// JSON String
// ↓
// JSON.parse()
// ↓
// JavaScript Value - typeof javascriptObject returns "object"

console.log('==========Local Storage============');

const localAnimeStorage = {
   myAnime : 'My Hero Academia',
   myFavoriteCharacter : 'Deku',
   'myFavorite FemaleCharacter' : 'Ochako Uraraka',
   characterPower : {
      Deku : 'One For All',
      Ochako : 'Zero Gravity'
   }
}
 localStorage.setItem("localAnimeStorage", JSON.stringify(localAnimeStorage));

 const savedLocalStorage = JSON.parse(localStorage.getItem("localAnimeStorage"));
console.log(savedLocalStorage);

console.log('==========Primitive Values autoboxing============');

const primitiveString = 'Hello, World!';
console.log(primitiveString.length); // Accessing the length property of a string
console.log(primitiveString.toUpperCase()); // Calling the toUpperCase() method on a string
console.log(primitiveString.toLowerCase()); // Calling the toLowerCase() method on a string
console.log((primitiveString.toLowerCase()).charAt(0)); // combining methods to get the first character in lowercase


