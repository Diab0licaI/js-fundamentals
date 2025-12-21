// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);  // when you compair datatype it should same

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* the reason is that an eqality check == and comparision
 > < >= <= work differently comparision convert null to a number
 treating it as 0. that'why (3)null >= 0 is true (1)null > 0
 is false
 */

 console.log(undefined == 0);
 console.log(undefined > 0);
 console.log(undefined < 0);
 
 // === strickly check

 console.log("2" === 2 );
 