// Stack -- Primitive[store]

let name = "NS"
let new_name = name
new_name = "Loni"

console.log(name) //NS
console.log(new_name)  // Loni

//---------------------------------------

// Heap --  Non-Primitive[store]

let user_1 = {
    name : "Nsloni",
    age : 20
}

let user_2 = user_1
user_2.name = " loni"

console.log(user_1.name)  // loni
console.log(user_2.name)  // loni

