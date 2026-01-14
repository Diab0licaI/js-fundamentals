class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }


    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}dipu`
    }

    set password(value){
        this._password = value
    }
}

const dipu =  new User("dipu.ai", "abc")
console.log(dipu.password);
console.log(dipu.email);

