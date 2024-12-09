const user = {
    name : "nsloni",
    age : 12,
    loc : "Bijapur",
    isLogin : true
}

console.log(user.name) // nsloni

console.log(user["age"])  // 12

Object.freeze(user)
console.log(user)
// { name: 'nsloni', age: 12, loc: 'Bijapur', isLogin: true }

console.log(`Hello ${user.name}`)