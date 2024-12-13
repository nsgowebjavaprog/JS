// Primitive-1
/*

1. String
2.Number
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt

*/

// Non-Primitive (Reference)
/*
1. Array
2. Object
3. Function
*/

/*
const id = Symbol('123')
const new_id = Symbol('123')
console.log(id == new_id) //false
console.log(id == new_id) //false

const id1 = Symbol(12)
const new_id1 = Symbol(12)
console.log(id1 == new_id1)  //false
console.log(id1 === new_id1)  //false

*/
/*
const num = 121212121212121212121212121121212

console.log(num) //1.212121212121212e+32

const BigInt = 121212121212121212121212121121212
console.log(BigInt) //1.212121212121212e+32
*/

/*
// Array
const hero = ["apple", " box", "car", "dog"]
console.log(hero)//[ 'apple', ' box', 'car', 'dog' ]

//Object
let my_obj = {
    name : "NS LONI",
    age : 20
}
console.log(my_obj)  //{ name: 'NS LONI', age: 20 }
*/

// function
const my_function(){
    console.log("HELLO NS LONI")
}
console.log(my_function)