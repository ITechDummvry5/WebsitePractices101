      const myDisneyArray = [ "snowWhite", "cinderella", "aurora", "belle", "jasmine", "rapunzel" , "elsa" ];
      console.log(myDisneyArray);
      console.log(typeof myDisneyArray);
      console.log(myDisneyArray[6]);
      console.log(typeof myDisneyArray[6]);

      myDisneyArray[6] = "anna";
      console.log(myDisneyArray);
      console.log('================================');

      const myNumberArray = [1, 2, 3 ];
      console.log(myNumberArray);

      myNumberArray[2] = 4;
      console.log(myNumberArray);
      console.log(myNumberArray[2]);

      console.log('================================');


         [1, 'Touch', true, { name: 'socks' }, [1, 2]]
         console.log(typeof [1, 'Touch', true, { name: 'socks' }, [1, 2]]);
         console.log(Array.isArray([1, 2 , 'true, false', { name: 'socks' }, [1, 2]]));

      console.log('================================');
         console.log('See line 10 =  myDisneyArray.length is : ', myDisneyArray.length);

         myDisneyArray.push('mulan');
         console.log(myDisneyArray);
         
         myDisneyArray.splice(0, 4);
         console.log(myDisneyArray);

console.log('================================'); 
const myAnime = ['naruto', 'dragon ball z', 'The time that I reincarnated as a slime', 'one piece'];  
const myGoldAnime = myAnime.splice(0, 2).concat(myAnime.splice(1));   
// splice(0, 2) removes the first 2 elements. Current myAnime: ['slime', 'one piece']
// splice(1) now works on the CURRENT array, so it removes 'one piece' because its index is 1. It returns ['one piece'].
// concat() combines the two returned arrays.
console.log(myGoldAnime); 
// myGoldAnime saves the combined array: ['naruto', 'dragon ball z', 'one piece']
console.log(myAnime);
// myAnime is now: ['slime'] because splice() changes the original array.


console.log('================================'); 
let myloop = 1;
while (myloop <= 5) { // true
    console.log('myloop is : ', myloop);
    myloop++; // same as myloop = myloop + 1 or myloop += 1
}
// Use while when you don't know how many times the loop will run.

console.log('================================'); 
for (let myloop2 = 1; myloop2 <= 5; myloop2++) {
    console.log('myloop2 is : ', myloop2);
}
// Use for when you know how many times the loop will run.                  


