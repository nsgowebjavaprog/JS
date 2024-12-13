const num = [1,2,3]


const total = num.reduce(function (acc, current){
    console.log(`acc ${acc} and current is : ${current}.`)
    return acc+current
}, 2)  // starting point

console.log(total)

/*
acc 2 and current is : 1.
acc 3 and current is : 2.
acc 5 and current is : 3.
*/