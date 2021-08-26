function getReceipt() {
    // THIS INITIALIZES OUT STRING SO IT CAN GET PASSED FROM FUNCTION TO FUNCTION, GROWING LINE BY LINE INTO A FULL RECEIPT
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    // FINDING WHAT SIZE USER HAS ORDERED
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        } 
    }
    // SETTING PRICE FOR EACH SIZE
    if (selectedSize === "Slice") {
        sizeTotal = 3;
    } else if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 9;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 12;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 15;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    // THESE VARIABLES WILL GET PASSED ON TO EACH FUNCTION
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    // DETERMINING IF USER EXCEEDED 2 FREE TOPPINGS, AND IF TRUE TOPPINGS = TOTAL TOPPINGS - 2
    var toppingCount = selectedTopping.length;
    if (toppingCount > 2) {
        toppingTotal = (toppingCount - 2);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 2 free toppings = " + "$" + toppingTotal + ".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
};