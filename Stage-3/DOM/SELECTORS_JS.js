// element selector

// 1.getElementById

const myheading = document.getElementById("wl");
myheading.style.backgroundColor = "yellow";
myheading.style.textAlign = "center";
myheading.style.color = "red";


// 2.getElementsByClassName

// const fruits1 = document.getElementsByClassName("friuts");

// fruits1.style.backgroundColor = "red";

// 3.getElementsByTagName

const ele = document.getElementsByTagName("li");

ele[0].style.backgroundColor = "yellow";

// 4.querySelector

const element = document.querySelector(".friuts");
element.style.backgroundColor = "red";

// 5.

const ele1 = document.querySelectorAll(".friuts");
ele1.style.backgroundColor = "red";