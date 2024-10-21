// console.log("Hello")
//     alert("Click")

// window.console.log("Hello Window")    

// SELECTING WITH ID
document.getElementById("my_id");
//eg: 1
let heading = document.getElementById("heading");
console.log(heading);


//SELECTING WITH CLASS
// document.getElementsByClassName("my_Class");
// //g: 2
// let heading = document.getElementsByClassName("heading-class");
// console.dir(headings);
// console.log(headings)

// return HTML collection


//SELECTIING WITH TAG
/*let parahs = document.getElementsByTagName("p");
console.dir(p)*/

//QUERY SELECTOR

/*document.querySelector("my_id / my_class" / "tag")
return 1st Element

document.querySelectorAll("my_id / my_class" / "tag")
return ALL */


// if (typeof document === "object") {
//     // Your browser-specific code here
//     document.querySelectorAll("p");
//     document.getElementById("table");
//     console.log("Running in a browser environment");
//   } else {
//     // Your non-browser code here
//     console.log("Running in a non-browser environment");
//   }

// 2

// const jsdom = require('jsdom');

// const { window } = new jsdom.JSDOM('');
// const document = window.document;

// // now you can access the document object
// let parahs = document.getElementsByTagName("p");

// 3
// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('about:blank');

//   // now you can access the document object
//   let parahs = await page.evaluate(() => document.getElementsByTagName("p"));

//   await browser.close();
// })();