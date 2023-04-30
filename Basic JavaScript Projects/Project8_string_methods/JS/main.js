// Define a function to use the concat() method
function joinStrings() {
    var string1 = "Hello";
    var string2 = "World";
    var concatenatedString = string1.concat(" ", string2);
    document.getElementById("output1").innerHTML = concatenatedString;
}

// Define a function to use the slice() method
function extractSubstring() {
    var string = "Lorem ipsum dolor sit amet";
    var extractedString = string.slice(6, 11);
    document.getElementById("output2").innerHTML = extractedString;
}

// Define a function to use the toString() method
function convertToString() {
    var number = 123.456;
    var string = number.toString();
    document.getElementById("output3").innerHTML = string;
}

// Define a function to use the toPrecision() method
function roundToPrecision() {
    var number = 123.456;
    var roundedNumber = number.toPrecision(5);
    document.getElementById("output4").innerHTML = roundedNumber;
}