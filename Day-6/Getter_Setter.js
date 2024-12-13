class User{
    constructor(email, pasword){
        this.email = email;
        this.password = pasword
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }

    get password(){
        return `${this._password}:addednsloni`  //nsloni:addednsloni
    }

    set password(value){
        this._password = value
    }

}
const nsloni = new User("nsloni@genai.ai", "nsloni")

console.log(nsloni.password) //nsloni@genai.ai