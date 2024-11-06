// my_checkbox
// vis_btn
// m_btn
// p_btn
// my_submit

// sub_result
// pay_result

const my_checkbox = document.getElementById("my_checkbox");
const vis_btn = document.getElementById("vis_btn");
const m_btn = document.getElementById("m_btn");
const p_btn = document.getElementById("p_btn");
const my_submit = document.getElementById("my_submit");
const sub_result = document.getElementById("sub_result");
const pay_result = document.getElementById("pay_result");

my_submit.onclick = function(){
    if(my_checkbox.checked){
        my_submit.textContent = `you are subscribed`;
    }else{
        my_submit.textContent = `you not subscribed`;
    }

    if(vis_btn.checked){
        pay_result.textContent = `you are pay_result`;
    }else{
        pay_result.textContent = `you not pay_result`;
    }

    if(p_btn.checked){
        pay_result.textContent = `you are pay_result`;
    }else{
        pay_result.textContent = `you not pay_result`;
    }
}