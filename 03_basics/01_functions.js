function sayMyName (){
    console.log("d");
    console.log("i");
    console.log("p");
    console.log("u");    
}

// sayMyName()

// function addTwoNumber (number1, number2) {
//   console.log(number1 + number2);
// }


function addTwoNumber (number1, number2) {
//     let result = number1 + number2
//     return result
//    return number1 + number2 
 }
   

const result = addTwoNumber(4, 5)
// console.log("Result:", result);

function logInUserMessage(username){
    if(!username){
        console.log("enter your user name"); 
        return
    }
    return `$(username) just logged In`
}

//  console.log(logInUserMessage("dipu"));
//  console.log(logInUserMessage());

 function calculateCartPrice(val1, val2, ...num1){
    return num1
 }
//  console.log(calculateCartPrice(100,300,33093));

 const user = {
     username: "dipu",
     price: 299
 }

 function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} Price is ${anyobject.price}`);
 }

//  handleObject(user)
   
handleObject({
    username: "dipu",
    price:677
})

const myNewArrays = [200, 400, 499]

function returnValue(getArray){
    return getArray[1]
}
console.log(returnValue(myNewArrays));


