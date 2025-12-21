 // primitive

 /* 7 types : String, Number, Boolean, null, undefined,
 Symbol, BigInt */
  
 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id = symbol('123')
 const anotherId = symbol("123")

 console.log(id == anotherId);
 const bigNumber = 1213214242352n
 

 // Reference (Non primitive)

 // Array, Object, Function

 const heros = ["iron man","naagraj","doga"];
 let myObj = {
    name:"dipu",
    age: 22,
 }


 const myFunction = function(){
    console.log("hello world");
  }

  console.log(typeof bigNumber);
  