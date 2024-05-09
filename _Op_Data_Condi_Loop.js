// OPERATOR'S

let a=10;
let b=20;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a**b)
console.log(a+b)
console.log(a+b)
console.log(a-b)
console.log(a%b)

//DATA TYPES

a=10
b=2.32
c="NSLONI"
d=true
e='s'

console.log(typeof(a)) //number
console.log(typeof(b))  //number
console.log(typeof(c))   
console.log(typeof(d))   //boolean
console.log(typeof(e))   //string   

// CONDITIONAL--->if, else

a=12;  //Even

if(a%2==0){
    console.log("Even")
}
else{
    console.log("Odd")
}

// RATING
rating=2;

if(rating==1){
    console.log(" one point")
}
else if(rating==2){
    console.log("Rating 2")
}
else if(rating==3){
    console.log("Rating 3")
}
else if(rating==4){
    console.log("Rating 4")
}
else console.log("Exellent") 

// a=5
// s='5'
// console.log(a==s)  //true
// console.log(a===s)  //false


// LOOPING
// for
for(let i=0; i<=10; i++){
    console.log(i)                // output : 1 to 10
} 

// while

let i=1
while (i<=10){
    console.log(i)      // output : 1 to 10
    i++
}    


i=1
do{
    console.log(i)    // output : 1 to 10
    i++
}while(i<=10)   

// PATTERN
for(let i=0; i<=5; i++){
    for(let j=1; j<=i; j++){
        console.log("*")
    }
}