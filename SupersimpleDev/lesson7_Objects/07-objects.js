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

  const product2 = {
        name: 'shirt',
        'delivery-time': '1 day',
        rating: {
          stars: 4.5,
          count: 87
        },
        fun: function function1() {
          console.log('function inside object');
        }
      };
      console.log(product2);
      console.log(product2.name);
      console.log(product2['name']);
      console.log(product2['delivery-time']);
      
      console.log(product2.rating.count);
      product2.fun();

      console.log(typeof console.log);

      console.log(JSON.stringify(product2));

      const jsonString = JSON.stringify(product2);
      console.log(JSON.parse(jsonString));

      