let number = [1,2,3,4,5,6,7,8,9,10];
let even_num = number.filter(isEven);
let odd_num = number.filter(isOdd);

console.log(even_num);
console.log(odd_num);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}