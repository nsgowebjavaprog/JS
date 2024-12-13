/* Eg-1
let a = 300

if(true){
    const a = 100
    const b = 200
    console.log("Inner A :", a)  // Inner A : 100
}
console.log("Outer A:", a)  // Outer A: 300
*/

// Eg-2
/*
function one(){
    const name = "Nagaraj"

    function two(){
        const age = 20
        console.log(name)  // Nagaraj
    }             //           |
    two()  // -----------------
}
one()

*/

// Eg-3
/*
if (true){
    const username = "Ns "

    if(username === "Ns "){
        const age = 20
        console.log(username + age)
    }
}
// console.log(username) --> Error
*/

// Eg-3

// Variable store everything like: json, function, obj etc..

function one(num){
    return num + 1
}
console.log(one(10))  // 11

const fun_two = function(num){
    return num + 2
}
console.log(fun_two(10)) // 12