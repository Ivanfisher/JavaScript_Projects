// Using local variable
function subtraction() {
    var x = 34;
    document.getElementById("subtract").innerHTML = (x - 12);
}

// Utilizing global variable
var z = 25;
function multiplication() {
    document.getElementById("multiply").innerHTML = (z * 3);
}

// Utilizing console.log to debug an intentionally errored code "using an undefined variable"
console.log(x + 31);

// Utilizing Date .getHours and conditional statements to determine output
function Time_function() {
    var time = new Date().getHours();
    var reply;
    if (time < 8 && time > 0) {
        Reply = "It is not yet time for me to study.";
    }
    else if (time >= 8 && time <= 17) {
        Reply = "It is time for me to study!";
    }
    else {
        Reply = "It is past my time to study.";
    }
    document.getElementById("time").innerHTML = Reply;
}