window.alert("This is only a practice page."); // Utilizing the window.alert() method.
var firstName = "Ivan ";
var lastName = "Fisher ";
var name = firstName + lastName; // Concatenating two string variables 
var name = name.fontcolor("#444"); // Giving name a dark gray color
document.write("Hello, my name is " + name + "and I am "); // Utilizing document.write
document.write(20 + 4); // Writing an expression
document.write(" years old.");
function Turn_Blue() {
    var blue = "This should be able to turn blue.";
    var result = blue.fontcolor("blue");
    document.getElementById("Blue_Text").innerHTML = result;
}