/*
let my_date1 = Date()
console.log(my_date1)  //Mon Dec 09 2024 07:01:47 GMT+0530 (India Standard Time)

let my_date2 = new Date();
console.log(my_date2.toString()); // Output: "Mon Dec 09 2024 07:01:47 GMT+0530 (India Standard Time)"

let my_date3 = new Date();
console.log(my_date3.toDateString()); // Output: "Mon Dec 09 2024"

let my_date4 = new Date();
console.log(my_date4.toLocaleString()); // Output: "12/9/2024, 7:01:47 AM IST"

console.log(typeof my_date4)  //object

let date = new Date(2024,12,9)
console.log(date.toDateString())

let my_date = new Date();
let timestampGetTime = my_date.getTime();
console.log("Timestamp using new Date().getTime():", timestampGetTime);
*/

let new_date = new Date();
console.log(new_date);
console.log(new_date.getTime()); 
console.log(new_date.getDay()); 
console.log(new_date.getDate()); 
console.log(new_date.getHours()); 
/*
2024-12-09T01:43:40.121Z
1733708620121
1
9
7
*/