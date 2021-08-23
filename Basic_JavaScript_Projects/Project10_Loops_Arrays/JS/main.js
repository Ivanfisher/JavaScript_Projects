function callLoop() {
    var digit = 1;
    var digitList = "";
    // Using a while loop to count by two up to 14
    while (digit < 15) {
        digit += 2;
        digitList += digit + "<br>";
    }
    document.getElementById("loop").innerHTML = digitList;
}


var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var blank = "";
var y;
function instrumentList() {
    for (y = 0; y < instruments.length; y++) {  // Using a for loop to display an entire array
        blank += instruments[y] + "<br>";
    }
    document.getElementById("Instruments").innerHTML = blank;
}

// Creating an array
function dogArray() {
    var dogPics = [];
    dogPics[0] = "playing";
    dogPics[1] = "eating";
    dogPics[2] = "barking";
    dogPics[3] = "sleeping";
    document.getElementById("array").innerHTML = "The dog is " + dogPics[0] + ".";
}

function constFunction() {
    const car = {kind:"Chevy", model:"Bolt", year:"2018", color:"white",};
    car.color = "black";
    car.price = "$21,000";
    document.getElementById("constant").innerHTML = "Eric bought a " + car.color + " " + car.year + 
    " " + car.kind + " " + car.model + " for " + car.price + ".";
}

// Creating an object with "let" and then returning all its values in one sentence
let dog = {
    name: "Skipper",
    kind: "Wheaten Terrier",
    color: "tan",
    age: 2,
    description: function() {
        return this.name + " is a " + this.age + " year old " + this.color + " " + 
        this.kind + "."; 
    }
}
document.getElementById("dog").innerHTML = dog.description();

function breakFunction() {
    var stop = "";
    for (x = 0; x < 12; x += 2) {
        stop += x + "<br>";
        if (x == 7 || x == 10) { break; } // Utilizing the "break" statement to exit a loop when a certain condition is true 
    }
    document.getElementById("breakOut").innerHTML = stop;
}

function skipFunction() {
    var skip = "";
    for (x = 0; x < 18; x += 3) {
        if (x == 9) { continue; } // Utilizing the "continue" statement to skip one iteration when a condition is true
        skip += x + "<br>";
    }
    document.getElementById("skipNumber").innerHTML = skip;
}