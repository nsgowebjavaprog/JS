// ...

// let number = [1,2,3,4,5];

// let maximum = Math.max(...number);
// let minimum = Math.min(...number);

// console.log(maximum); //5
// console.log(minimum);//1

let fruits = ["apple", "banana", "orange"];
let fruits12 = ["apple12", "banana12", "orange12"];

let new_fruits = [...fruits, fruits12];
console.log(new_fruits);

// [ 'apple', 'banana', 'orange', [ 'apple12', 'banana12', 'orange12' ] ]