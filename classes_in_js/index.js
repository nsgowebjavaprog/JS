// export to computer . js

// class Computer{
//     constructor(name){
//         this.name = name
//     }

//     run(){
//         console.log("The computer is now running")
//     }
// }

// 2

// class Macbook extends Computer{
//     constructor(name, company){
//         super(name)
//         this.company = company
//     }

//     logIn(){
//         console.log("You are logged into a Macbook" + this.name)
//     }
// }

import { Computer } from "./computer.js";
import Macbook from './macbook.js';

const macbook_air = new Macbook('Air', 'Apple');
macbook_air.logIn()
macbook_air.run()