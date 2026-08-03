const anime = {
  protagonist: 'Luffy',
  bounty: 3000000000
};
// Display the entire object in the console
console.log(anime);
// Access the 'protagonist' property using dot notation
console.log(anime.protagonist);
// Access the 'bounty' property using dot notation and display its data type
console.log(typeof anime.bounty);

console.log("//======================");
let touch = {
  maleLead: 'Tat-chan',
  femaleLead: 'Minami',
  relation: 'Love Interest'
};
// Display the entire object
console.log(touch);
// Access object properties using dot notation and combine them to create a sentence
console.log(touch.maleLead, touch.relation, 'is', touch.femaleLead);

console.log("//======================");
/* ============================================================
   Changing Object Properties
   ============================================================ */

// Change the value of an existing property
touch.maleLead = 'Kat-chan';

// Display the updated object
console.log(touch);
// Access the updated property value
console.log(touch.maleLead, touch.relation, 'is', touch.femaleLead);

console.log("//======================");
/* ============================================================
   Adding a New Property to an Object
   ============================================================ */

touch.hasBrother = true;
// Display the updated object
console.log(touch);
// Access the new property value = right now the current maleLead is Kat-chan not Tat-chan because we Change the Object Properties
console.log('Tatchan Twin Brother is', touch.maleLead ,touch.hasBrother);

console.log("//======================");
/* ============================================================
   Deleting a Property from an Object
   ============================================================ */
delete touch.hasBrother;
// Display the updated object
console.log(touch);
console.log(touch.hasBrother); //undefined because we delete a Property from an object
/* ============================================================
   Checking  a Property from an Object - NON_PRIMITIVE DATA TYPE
   ============================================================ */
console.log(typeof touch); //  Object 

console.log("//======================");
