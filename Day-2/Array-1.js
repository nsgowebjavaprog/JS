/*
const my_arr = [0,1,2,3]
console.log(my_arr)
console.log(my_arr[0])

console.log(my_arr[3])

//methods

my_arr.push(11)
console.log(my_arr)

my_arr.push(12)
console.log(my_arr)

my_arr.pop()
console.log(my_arr)

// [ 0, 1, 2, 3, 11 ]
// [ 0, 1, 2, 3, 11, 12 ]
// [ 0, 1, 2, 3, 11 ]


my_arr.unshift(0)
console.log(my_arr) // [ 0, 0, 1, 2, 3, 11 ]

my_arr.unshift(11)
console.log(my_arr)  // [11, 0,  0, 1, 2, 3, 11]

console.log(my_arr.includes(11))  // true

console.log(my_arr.indexOf(11))  // 0

console.log(my_arr.length)  // 7

console.log(typeof my_arr)  // object

let new_arr = my_arr.join()
console.log(new_arr)  // 11,0,0,1,2,3,11
console.log(typeof new_arr)  //string

*/

// slice & splice
const my_arr = [11,22,33,44,55,66,77,88,99]

const res_arr_1 = my_arr.slice(0,3) 
console.log(res_arr_1)  // [ 22, 33, 44 ]

console.log(my_arr)

const res_arr_2 = my_arr.splice(0,3)
console.log(res_arr_2)  // [ 11, 22, 33 ]