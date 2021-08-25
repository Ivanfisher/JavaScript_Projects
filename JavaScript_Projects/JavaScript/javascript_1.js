function schoolSubject() {
    var output;
    var subjects = document.getElementById("subject").value;
    switch(subjects.toLowerCase()) {
        case "social studies":
            output = "Nice. I believe Social Studies is my third favorite of the four.";
            break;
        case "language arts":
            output = "Nice. I believe Language Arts is my least favorite of the four.";
        break;
        case "science":
            output = "Nice! I believe Science is a close second on my list.";
        break;
        case "math":
            output = "Cool! I believe Math is my favorite subject as well!";
        break;
        default:
            output = "Please enter one of the options listed above.";
    }
    document.getElementById("answer").innerHTML = output;
}

function sentence() {
    var a = document.getElementsByClassName("test");
    a[0].innerHTML = "Thank you. You passed!";
}


var fading = document.getElementById("fade")
var dunno = fading.getContext("2d");

var gradual = dunno.createLinearGradient(0,0,500,0);
gradual.addColorStop(0,"white");
gradual.addColorStop(1,"blue");
dunno.fillStyle = gradual;
dunno.fillRect(0,0,500,280);
