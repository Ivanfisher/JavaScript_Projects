// Utilizing .concat and .toUpperCase methods to join variables together and capitalize them
function complete() {
    var first = "Ivan ";
    var middle = "Lavern ";
    var last = "Fisher";
    var whole = first.concat(middle, last).toUpperCase();
    document.getElementById("Concatenate").innerHTML = whole;
}

// Utilizing the .slice and the .search methods to find the word of a position and the position of a word
function slicing() {
    var complete = "Get only one word of this sentence and tell me its position";
    var what = complete.slice(21,25);
    var where = complete.search("this");
    document.getElementById("part").innerHTML = what + ", " + where;
}

// Utilizing the .toString method to convert number to string
function convert() {
    var x = 432;
    var y = 444;
    var sum = x.toString() + y;
    document.getElementById("conversion").innerHTML = sum;
}

// Utilizing the .toPrecision and .toFixed methods to round down a number to a certain amount
function precise() {
    var x = 100;
    var dividend = x / 7;
    document.getElementById("precisely").innerHTML = dividend.toPrecision(6);
    document.getElementById("two").innerHTML = dividend.toFixed(2);
}