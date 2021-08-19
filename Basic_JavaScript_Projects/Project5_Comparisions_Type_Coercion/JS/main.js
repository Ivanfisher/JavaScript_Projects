// Utilizing document.write and typeof
document.write("Eight is a " + (typeof Number("Thirty three"))); 

// Displays NaN, since you can't divide 0 by 0
function test() {  
    document.getElementById("Test").innerHTML = 0 / 0;
}

// Utilizing isNan
function decision() {  
    document.getElementById("Decision").innerHTML = isNaN('This is not a number');
}

function decide() {
    document.getElementById("Decide").innerHTML = isNaN('8');
}

// Displays infinity
function isLarge() {  
    document.getElementById("isLargeNumber").innerHTML = 1.5E312;
}

// Displays -infinity
function isSmall() {  
    document.getElementById("isSmallNumber").innerHTML = -2E308;
}

// Utilizing boolean logic
function equal_1() {  
    document.getElementById("equality_1").innerHTML = 5 > 2;
}

function equal_2() {
    document.getElementById("equality_2").innerHTML = 5 < -24;
}

// Utilizing console.log
console.log(5 * 23);

console.log(-45 > 32);

// == returns true if value is equal, and false if value is not equal
function equal_3() {
    document.getElementById("equality_3").innerHTML = (32 / 8) == 4;
}

function equal_4() {
    document.getElementById("equality_4").innerHTML = (7 * 3) == 24;
}

// === returns true only if type and value are true, otherwise it returns false
function equal_5() {
    document.getElementById("equality_5").innerHTML = "twenty" === "twenty";
}

function equal_6() {
    document.getElementById("equality_6").innerHTML = "twenty" === -20;
}

function equal_7() {
    document.getElementById("equality_7").innerHTML = "twenty" === 20;
}

function equal_8() {
    document.getElementById("equality_8").innerHTML = 20 === 20;
}

// && returns true if both comparisions are true, and false if only one or none comparisions are true
function equal_9() {
    document.getElementById("equality_9").innerHTML = 34 > 30 && 34 < 40;
}

function equal_10() {
    document.getElementById("equality_10").innerHTML = 42 < 51 && 42 > 45;
}

// || returns true if one or both comparisions are true, and false only if both comparisions are false
function equal_11() {
    document.getElementById("equality_11").innerHTML = 25 > 21 || 25 < 12;
}

function equal_12() {
    document.getElementById("equality_12").innerHTML = 25 > 31 || 25 < 21;
}

// ! returns true if comparision is not true, and false if comparision is true
function equal_13() {
    document.getElementById("equality_13").innerHTML = !(-16 > 6);
}

function equal_14() {
    document.getElementById("equality_14").innerHTML = !(43 > 42.95);
}