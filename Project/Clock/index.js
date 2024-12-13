const clock = document.getElementById('clock');

//Syntax

// setInterval(function() {}, 1000);

setInterval(function() {
    let date = new Date();

    clock.innerHTML = date.toLocaleTimeString();
}, 1000);