// Declare a global variable
var globalVariable = "I am a global variable.";

// Define a function that includes an if statement
function checkNumber(number) {
  if (number % 2 == 0) {
    console.log(number + " is even.");
  } else {
    console.log(number + " is odd.");
  }
}

// Define a function with an error in it and use console.log() to debug it
function addNumbers(x, y) {
  console.log("The sum of " + x + " and " + y + " is " + (x + y)); // Correct version
  //console.log("The sum of " + x + " and " + y + " is " + x + y); // Erroneous version
}

// Define the Time_function() outlined in previous slides
function Time_function() {
  // Get the current date and time
  var currentDateTime = new Date();
  
  // Extract the hour, minute, and second components
  var hours = currentDateTime.getHours();
  var minutes = currentDateTime.getMinutes();
  var seconds = currentDateTime.getSeconds();
  
  // Display the time in a formatted string
  console.log("The current time is " + hours + ":" + minutes + ":" + seconds);
}

// Call the functions with some sample arguments
console.log(globalVariable);
checkNumber(7);
addNumbers(3, 4);
Time_function();
