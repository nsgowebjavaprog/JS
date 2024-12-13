/*

const map = new Map()

map.set('In', "Indian")
map.set('C', "USA")
map.set('B', "Russy")
map.set('A', "AAA")
map.set('C', "USA")
map.set('C', "USA")
map.set('C', "USA")
map.set('C', "USA")
map.set('C', "USA")  // No dubplicate

// console.log(map)


for(const [key, value] of map){
    console.log(key, ':-', value)
}

*/

/*
const my_obj = {
    js: 'Javascript',
    cpp: 'c++',
    rb: 'Rubby'
}

for(let key in my_obj){
    console.log(key)
}
*/

/*
const my_obj = {
    js: 'Javascript',
    cpp: 'c++',
    rb: 'Rubby'
}

// js
// cpp
// rb

for(let key in my_obj){
    console.log(`${key} is equal to : ${my_obj[key]}.`)
}
// js is equal to : Javascript.
// cpp is equal to : c++.
// rb is equal to : Rubby.

*/

const map = new Map()

map.set('In', "Indian")
map.set('C', "USA")
map.set('B', "Russy")
map.set('A', "AAA")
map.set('C', "USA")
map.set('C', "USA")
map.set('C', "USA")
map.set('C', "USA")
map.set('C', "USA")

console.log(map)

for(const [key, value] of map){
    console.log(key, ':-', value)
}