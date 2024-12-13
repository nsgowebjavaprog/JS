/*
const name = "NS LONI"
const age = 20

console.log(name + age + " LONI")  //NS LONI100 LONI

console.log(`Hello ${name} you are ${age} old.`)
//Hello NS LONI you are 20 old.
*/

let name = "Nagaraj Loni      "

console.log(name.__proto__)

console.log(name)
console.log(name[0])

console.log(name.length)
console.log(name.toUpperCase())

console.log(name.charAt(0))
console.log(name.toLowerCase())

console.log(name.substring(0, 8))
console.log(name.indexOf('N'))

console.log(name.slice(0,4))  // Naga
console.log(name.trim())  // remove space

console.log(name.slice(-10,-1))  // Loni
console.log(name.replace("NS LONI"))

const name1 = "John Doe";
console.log(name1.split()); // Output: ["John Doe"]
console.log(name1.split(" ")); // Output: ["John", "Doe"]console.log(name.small())

const name2 = "John Doe";
console.log(name2.slice(0, 4)); // Output: "John"

const name3 = "John Smith";
console.log(name3.replaceAll('m', 'x')); // Output: "John Sxith"

const name10 = "John Doe";

console.log(name10.substr()); // Output: "John Doe" (entire string)
console.log(name10.substr(4)); // Output: "Doe"
console.log(name10.substr(4, 3)); // Output: "Doe"
console.log(name10.substr(-3, 3)); // Output: "Doe"