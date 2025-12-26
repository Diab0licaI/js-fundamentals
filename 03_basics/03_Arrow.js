// this we learn this which tell current context

const user = {
    username: "dipu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "aman"
// user.welcomeMessage()log

// console.log(this);  // output {} empty outside the node

// function chai(){
//     let username = "dipu"
//     console.log(this.username);
//     //this only work in object not in function
// }
//  chai()


//arrow function

// const chai = () => {
//     let username = "dipu"
//     console.log(this.username);
    
// }
// chai()

// const addTwo = (num1, num2) => { //if we using {} then use return
//    return num1 + num2
// }

//  implicit return
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2) // if() that don't use return

const addTwo = (num1, num2) => ({username: "dipu"})
console.log( addTwo(3,4));
