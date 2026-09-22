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


      
         console.log(typeof [1, 'Touch', true, { name: 'socks' }, [1, 2]]);
         console.log(Array.isArray([1, 2 , 'true, false', { name: 'socks' }, [1, 2]]));

      console.log('================================');
         console.log('See line 10 =  myDisneyArray.length is : ', myDisneyArray.length);

         myDisneyArray.push('mulan');
         console.log(myDisneyArray);
            // "snowWhite", "cinderella", "aurora", "belle", "jasmine", "rapunzel" , "anna", "mulan"
         myDisneyArray.splice(0, 4);
        //  0 = starting index → start at index 0
        // 4 = number of elements to remove → remove 4 elements
         console.log(myDisneyArray);

console.log('================================'); 

const myAnime = ['naruto', 'dragon ball z', 'The time that I reincarnated as a slime', 'one piece'];  
const myGoldAnime = myAnime.splice(0, 2).concat(myAnime.splice(1));   
// splice(0, 2) removes the first 2 elements. Current myAnime: ['slime', 'one piece']
// splice(1) now works on the CURRENT array, so it removes 'one piece' because its index is 1. It returns ['one piece']. It will remain the ['slime'] in myAnime.
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

console.log('================================'); 
const num=[1, 2, 3, 4, 5];
let total= 0;

for (let i=0; i<num.length; i++) {
    const numValue = num[i];
    total += numValue; // 1 + 2 + 3 + 4 + 5 = 15
}
console.log('total is : ', total);
// Use accumulator pattern to sum up the values in an array. 
// The accumulator is total, which starts at 0 and adds each value in the array to it.

const doubleNum = []

for (let i=0; i<num.length; i++) {
    doubleNum.push(num[i] * 2);
    total += num[i]; // 2 + 4 + 6 + 8 + 10 = 30
}
console.log('doubleNum is : ', doubleNum);
console.log('Double total is : ', total);
// Use accumulator pattern to create a new array with the values in the original array doubled.
console.log('================================'); 



