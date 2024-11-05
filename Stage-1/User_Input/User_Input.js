// let user_name;

// user_name = window.prompt(`Enter User name:`);
// console.log(user_name);

let user_name;
document.getElementById(`my_btn`).onclick = function(){
    user_name = document.getElementById(`my_input`).value;
    document.getElementById(`my_h1`).textContent = `Hello ${user_name}`;
}