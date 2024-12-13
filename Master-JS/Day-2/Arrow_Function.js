// this keyword

const user ={
    username : "Nagaraj",
    age : 20,

    welcome: function(){
        console.log(`${this.username}, welcome to website`);
    }
}
user.welcome() 
//Nagaraj, welcome to website

user.username = "NS"
user.welcome()  // NS, welcome to website



// Arrow Function-----> Syntax-- () => {}

// Eg-1
/*
const ns = () => {
    let username = "nsloni"
    console.log(this)
}
ns()   // {}
*/

// Eg-2
const add = (num1, num2) =>{
    return num1 + num2
}
console.log(add(10,20))  // 30