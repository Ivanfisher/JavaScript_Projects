function validateForm() {
    let checkName = document.forms["myForm"]["firstName"].value;
    if (checkName == "") {
        alert("Name must be filled out");
        return false;
    }
    let checkNumber = document.getElementById("Number").value;
    if (isNaN(checkNumber) || checkNumber.toString().length < 10 || checkNumber.toString().length > 11) {
        alert("Please enter a valid 10 digit phone number");
        return false;
    }
}