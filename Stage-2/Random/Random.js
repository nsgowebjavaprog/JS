// // let ran_Num = Math.floor(Math.random() * 10)+1;
// // console.log(ran_Num)

// // Between 50 & 100

// const max = 150;
// const min = 50;

// let ran_Num = Math.floor(Math.random() * (max-min))+min;
// console.log(ran_Num)


const myButton = document.getElementById("my_btn");
const myLabel1 = document.getElementById("my_label1");
const myLabel2= document.getElementById("my_label2");
const myLabel3 = document.getElementById("my_label2");


const min = 50;
const max = 100;
let ran_Num1;
let ran_Num2;
let ran_Num3;

myButton.onclick = function(){
    ran_Num1 = Math.floor(Math.random() * (max-min))+min;

    ran_Num2 = Math.floor(Math.random() * (max-min))+min;

    ran_Num3 = Math.floor(Math.random() * (max-min))+min;

    myLabel1.textContent = ran_Num1;

    myLabel2.textContent = ran_Num2;

    myLabel3.textContent = ran_Num3;
}