
// import { Computer } from "./computer.js";

export default class Macbook extends Computer{
    constructor(name, company){
        super(name)
        this.company = company
    }

    logIn(){
        console.log("You are logged into a Macbook" + this.name)
    }
}
