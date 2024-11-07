// function birth_day(username, age){
//     console.log("Happay Birth-Day");
//     console.log(`Happay Birth-Day ${username}`);
//     console.log(`Happay ${age} th Birth-Day`);
// }
// birth_day("Loni", 20);


// function add(x,y){
//     let result = x+y;
//     return result;
// }
// console.log(add(3,7));

// function add(x,y){
//      return x+y;    
// }
// console.log(add(3,7));


function is_valid_email(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}
console.log(is_valid_email("nsloni200@gmail.com"));
console.log(is_valid_email("nsloni200gmail.com"));
console.log(is_valid_email("nsloni200gmail.com"));

// true
// false
// false