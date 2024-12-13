// console.log(Math.PI) // 3.142

// Convert PI = 4

const res = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(res);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

const new_obj = {
    name : 'Ns loni',
    age : 20,
    student: true
}
console.log(new_obj) //{ name: 'Ns loni', age: 20, student: true }

console.log(Object.getOwnPropertyDescriptor(new_obj,"name"));
/*
{
  value: 'Ns loni',
  writable: true,
  enumerable: true,
  configurable: true
}
*/