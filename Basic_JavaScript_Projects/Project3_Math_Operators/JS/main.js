// Adding two integers
function add() {
    var sum = 45 + 439;
    document.getElementById("Addition").innerHTML = "45 + 439 = " + sum + ".";
}

// Subtracting two integers
function subtract() {
    var difference = 349 - 287;
    document.getElementById("Subtraction").innerHTML = "349 - 287 = " + difference + ".";
}

// Multiplying two numbers
function multiply() {
    var product = 56 * 39;
    document.getElementById("Multiplication").innerHTML = "56 * 39 = " + product + ".";
}

// Dividing two numbers
function divide() {
    var quotient = 236 / 4;
    document.getElementById("Division").innerHTML = "236 / 4 = " + quotient + ".";
}

// Performing several math operations at once
function math() {
    var result = (45 + 32) * 5 / 4 - 88;
    document.getElementById("Math").innerHTML = "(45 + 32) * 5 / 4 - 88 = " + result + ".";
}

// Getting the remainder of a division problem
function remain() {
    var modulus = 453 % 7;
    document.getElementById("Remainder").innerHTML = "When you divide 453 by 7 you get a remainder of " + modulus + ".";
}

// Using the negation operator to turn a positive number into a negative number
function negation() {
    var x = 48;
    document.getElementById("Unary").innerHTML = "When the negation operator is applied to the number 48, the result is " + -x + ".";
}

// Incrementing a number by one
function increase() {
    var num = 43.8;
    num++;
    document.getElementById("Increment").innerHTML = "43.8 incremented is " + num + ".";
}

// Decrementing a number by one
function decrease() {
    var number = 79;
    number--;
    document.getElementById("Decrement").innerHTML = "79 decremented is " + number + ".";
}

// Finding the square root of a number
function square() {
    var root = Math.sqrt(529);
    document.getElementById("Square_root").innerHTML = "The square root of 529 is " + root + ".";
}

// Getting a random integer between 0 and 100
function random() {
    var question = Math.floor(Math.random() * 100)
    document.getElementById("Random_number").innerHTML = question + " is a random number between 0 and 100.";
}