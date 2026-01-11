// ES6

// class user {
//     constructor(username, email, passward){
//         this.username = username
//         this.email = email
//         this.passward = passward
//     }

//     encryptPassward(){
//     return `${this.passward}abc`
//    }
//     changeUsername(){
//     return `${this.username.toUpperCase()}`
//    }
// }

// const chai = new user("chai","chai@gamil.com","123")
// console.log(chai.encryptPassward());
// console.log(chai.changeUsername());


// behind the seen


function User (username, email, passward){
    this.username = username;
    this.email = email;
    this.passward = passward;
}

User.prototype.encryptPassward = function(){
     return `${this.passward}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassward());
console.log(tea.changeUsername());
