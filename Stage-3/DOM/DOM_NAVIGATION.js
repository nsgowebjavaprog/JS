// friuts
// veg
// des


// 1--firstElementChild
const ele1 = document.getElementById("friuts");
const f_child = ele1.firstElementChild;
f_child.style.backgroundColor = "yellow";

// 2 -- lastElementChild
const ele2 = document.getElementById("veg");
const l_child = ele2.lastElementChild;
l_child.style.backgroundColor = "red";

// 3--nextElementSibling
const ele3 = document.getElementById("veg");
const n_child = ele3.nextElementSibling;
n_child.style.backgroundColor = "yellow";

// 4--previousElementSibling
const ele4 = document.getElementById("veg");
const p_child = ele4.previousElementSibling;
p_child.style.backgroundColor = "red";

// 5--parentElement
const ele5 = document.getElementById("veg");
const pa_child = ele5.parentElement;
pa_child.style.backgroundColor = "aqua";

// // 5--children
// const ele6 = document.getElementById("veg");
// const pa_child = ele6.children;
// pa_child.style.backgroundColor = "orange";