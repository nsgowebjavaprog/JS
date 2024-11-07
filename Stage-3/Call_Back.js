// function hello(){
//     setTimeout(function(){
//         console.log("Goodbye");
//     }, 3000);
// }
// hello();

// function goodbye(){
//     console.log("Hello Bro");
// }
// goodbye();


function hello(callback){
        console.log("Goodbye");
        callback();
}
hello(goodbye);

function goodbye(){
    console.log("Hello Bro");
}

function tq(){
    console.log("Thank you Bro");
}
tq();


