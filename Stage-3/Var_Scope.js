/*
1. local

function function1(){
    let x = 1;
    console.log(x);
}
function1();


function function2(){
    let x = 10;
    console.log(x);
}
function2();

*/


// 2. Global

let x = 10;
function function1(){
    console.log(x);
}
function1();


function function2(){
    console.log(x);
}
function2();