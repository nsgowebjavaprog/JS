arr = [1,2,3,4,5,6,7,8];
console.log(arr)

// push
arr.push(9)
console.log(arr)

arr.push(10)
console.log(arr)

arr.pop()
console.log(arr)

// add @ first
arr.unshift(22)
console.log(arr)

// remove @ first
arr.shift();
console.log(arr)


n = arr.length
console.log(arr[0])

for(let i=0; i<n; i++){
    console.log(arr[i])
}

const arr=[0,2,3,4,5]
arr[0]=1
console.log(arr)    // [ 1, 2, 3, 4, 5 ]


arr = [4,"nagaraj",20.9,true]
console.log(typeof(arr))  // object

for (const ele of arr) {
    console.log(ele)
}
// output:
// 4
// nagaraj
// 20.9
// true

arr =[1,2,3,4,5]
arr.forEach((element,i) => {
    console.log(element,i)
});
// OUTPUT:
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4