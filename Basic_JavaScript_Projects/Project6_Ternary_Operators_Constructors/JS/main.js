// Using a ternary operation "?" to choose to return one of two options based on a condition
function voteFunction() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 19) ? "You are not old enough to vote.":"You are old enough to vote!";
    document.getElementById("vote").innerHTML = can_vote;
}

// Creating a constructor function
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
// Creating new "objects" with the constructor "Vehicle"
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}


// Using a nested function
function count() {
    document.getElementById("Nested_Function").innerHTML = counting();
    function counting() {
        var start = 5;
        function add() {start += 2;}
        add();
        return start;
    }
}