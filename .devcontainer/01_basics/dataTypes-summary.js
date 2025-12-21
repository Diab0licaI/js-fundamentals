 // primitive

 /* 7 types : String, Number, Boolean, null, undefined,
 Symbol, BigInt */
  
 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol("123")

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

  //+++++++++++++++++++++++++++++++++++++++++++++++

  //there two type of memory
  //Stack(primitive),  Heap(Non primitive)
  
  let myCollegename = "nit AP"

  let anothername = "dipu"

  console.log(myCollegename);
  console.log(anothername);

  let userOne = {
   email: "user@google.com",
   upi: "user@ybl"
  }

  let userTwo = userOne

  userTwo = userOne
  userTwo.email = "dipu@google.com"

  console.log(userOne.email);
  console.log(userTwo.email);
  

  
  