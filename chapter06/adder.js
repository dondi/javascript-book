// Grab the elements that we need.
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var status = document.getElementById("status");

// Read the required text and convert to numbers.
var number1 = +input1.value;
var number2 = +input2.value;

// Write the result.
status.innerHTML = number1 + " + " + number2 +
    " = " + (number1 + number2);