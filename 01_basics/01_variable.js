const accountID = 14434
let accontEmail = "dipu@google.com"
var accountPassward = "1234"
accountCity = "jaipur"
let accountState;

// accountID = 2 // not allowed

accontEmail = "hdc@hc.com"
accountCity = "goa"
accountPassward = "12121212"

console.log(accountID);
console.table([accountID,accontEmail,accountPassward,accountCity,accountState]);

/* 
prefer not to used var because of
issue in block scope and functional scope
*/