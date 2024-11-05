const PI = 3.142;
let radius;
let circumference;

document.getElementById("my_btn").onclick = function(){
    radius = document.getElementById("my_id").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById('my_h2').textContent = circumference +"cm";
}
