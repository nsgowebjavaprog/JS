let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode="light";

modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
    body.classList.add("dark");
    body.classList.remove("light");
    }else {
        currMode="light";
        body.classList.add("light");
        body.classList.remove("light");
    }
    console.log(currMode);
});