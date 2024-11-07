
const textBox = document.getElementById("textBox");
const to_F = document.getElementById("to_F");
const to_C = document.getElementById("to_C");
const result = document.getElementById("result");
let temp;

function convert(){
    if(to_F.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent  = temp.toFixed(1) + "F";
    }
    else if(to_C.checked){
        temp = Number(textBox.value);
        temp =(temp - 32) * (5/9);
        result.textContent  = temp.toFixed(1) + "C";
    }
    else{
        result.textContent = "Select a unit";
    }
}
convert();