const bf = ["a", "b", "c", "d"]
const gf = ["1", "2", "3", "4"]

// console.log(bf)
// console.log(bf.push("e"))
// console.log(bf)

// bf.push(gf)
// console.log(bf) //[ 'a', 'b', 'c', 'd', [ '1', '2', '3', '4' ] ]

// const all = gf.concat(bf)
// console.log(all)  //[ '1', '2', '3', '4', 'a', 'b', 'c', 'd', [ '1', '2', '3', '4' ] ]


// const all = [...bf, ...gf]
// console.log(all)
/*
[
  'a', 'b', 'c',
  'd', '1', '2',
  '3', '4'
]
  */

// const ano_arr = [1,2,3, [4,5,6], 7, [4,5,6,[3,4,3]]]
// console.log(ano_arr)
// // [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 4, 5, 6, [ 3, 4, 3 ] ] ]

// const res_arr = ano_arr.flat(Infinity)
// console.log(res_arr)
// /*
// [
//   1, 2, 3, 4, 5, 6,
//   7, 4, 5, 6, 3, 4,
//   3
// ]
//   */


console.log(Array.isArray("Nagaraj")) // false

console.log(Array.from("Nagaraj"))
/*
[
  'N', 'a', 'g',
  'a', 'r', 'a',
  'j'
]
  */

console.log(Array.from({name: "Nagaraj"})) // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
// [ 100, 200, 300 ]