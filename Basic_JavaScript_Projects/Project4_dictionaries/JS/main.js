function myDictionary() { // Creating a function called myDictionary
    var animal = {        // Creating a dictionary
        Species:"Dog",    // Assigning the value "Dog" to the key "Species"
        Breed:"Poodle",    // Assigning the value "Poodle" to the key "Breed"
        Color:"White",     // Assigning the value "White" to the key "Color"
        Age:"2",          // Assigning the value "2" to the key "Age"
        Sound:"Bark!"     // Assigning the value "Bark" to the key "Sound"
    };
    delete animal.Sound; // Deleting the key "Sound" from the dictionary
    document.getElementById("Dictionary").innerHTML = animal.Sound; // Returns "undefined" since the key "Sound" is deleted
}