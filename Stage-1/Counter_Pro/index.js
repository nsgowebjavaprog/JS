// my_label
// my_div

// dec_btn
// reset_btn
// inc_btn

const Dec_btn = document.getElementById('dec_btn');
const Reset_btn = document.getElementById('reset_btn');
const Inc_btn = document.getElementById('inc_btn');

const countLable = document.getElementById('my_label');

let count = 0;

Dec_btn.onclick = function(){
    count--;
    countLable.textContent = count;
}

Reset_btn.onclick = function(){
    count = 0;
    countLable.textContent = count;
}

Inc_btn.onclick = function(){
    count++;
    countLable.textContent = count;
}