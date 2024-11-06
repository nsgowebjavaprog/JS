// const name = "Nagaraj Loni"

// let f_name = name.slice(0,8);
// console.log(f_name);

// let l_name = name.slice(8,name.length);
// console.log(l_name);

// let full_name = f_name + l_name;
// console.log(full_name);

// // Nagaraj 
// // Loni
// // Nagaraj Loni

// let res1 = name.slice(-1);//i
// console.log(res1);

// let res2 = name.slice(-12, 12);//Nagaraj Loni
// console.log(res2);

const email = "nagarajloni@gmail.com";

let username = email.slice(0, email.indexOf("@"));//nagarajloni
console.log(username);


let last = email.slice(email.indexOf("@") + 1);//gmail.com
console.log(last);


