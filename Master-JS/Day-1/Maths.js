/*
const bal = 100

console.log(bal.toString().length)
console.log(bal.toFixed(10))  //100.0000000000

const sec_num = 23.121212121212
console.log(sec_num.toPrecision(4))  // 23.12

const hundreds = 100000000000
console.log(hundreds.toLocaleString())  //1,00,00,00,00,000

*/

console.log(Math)   // Object [Math] {}
// Math ----> Object

console.log(Math.abs(-2)) // 2 // Function

console.log(Math.round(4.4)) //4

console.log(Math.max(10,20))

console.log(Math.min(10,20))

console.log(Math.pow(4,4))

console.log(Math.random())

console.log(Math.sqrt(25))

console.log(Math.tan(90))
/*
Object [Math] {}
2
4
20
10
256
0.1326865830715689
5
-1.995200412208242
*/

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min)  // 12
