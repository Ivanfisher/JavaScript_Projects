function subtraction() {
    var x = 34;
    document.getElementById("subtract").innerHTML = (x - 12);
}

var z = 25;
function multiplication() {
    document.getElementById("multiply").innerHTML = (z * 3);
}

console.log(x + 31);

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