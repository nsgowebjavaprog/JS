// Ex-1
function calcu_price(num1){
    return num1
}

console.log(calcu_price(10, 20, 30, 40, 50))  //10


// Ex-2
function calcu_price(...num1){
    return num1
}

console.log(calcu_price(10, 20, 30, 40, 50)) 
// [ 10, 20, 30, 40, 50 ]


// Ex-3
const user = {
    username : "Nagaraj",
    age : 20
}

function user_details(obj){
    console.log(`User-Name is: ${obj.username} and age is ${obj.age}.`)
}

user_details(user)
// User-Name is: Nagaraj and age is 20.


// Ex-4
const arr=  [10,20,30,40,50]

function return_val(arr){
    return arr[2]
}
console.log(return_val(arr))  // 30