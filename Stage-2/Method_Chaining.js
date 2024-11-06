// 1.Remove all space
// 2.First--->Upper-Case and other will be small letter

let username = window.prompt("Enter the name:");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username)