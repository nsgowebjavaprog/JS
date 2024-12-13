/*
for(let i=0; i<10; i++){
    const element = i
    if(element == 7){
        console.log("7 is better number")
    }
    console.log(element)
}

// console.log(element)  //---> error
*/

/*
for (let i=0; i<5; i++){
    console.log(i)
    for(let j=0; j<5; j++){
        console.log(i,j)
    }
}
    */

/////////////////////////////////---Break

/*
for(let i=0; i<10; i++){
    if(i == 4){
        console.log("It is Break @: 4")
        break
    }
    console.log(i)
}
    */


for(let i=0; i<10; i++){
    if(i == 4){
        console.log("It is continue @: 4")
        continue
    }
    console.log(i)
}