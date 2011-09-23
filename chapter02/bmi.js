var KILOGRAMS_PER_POUND = 0.45359237;
var METERS_PER_INCH = 0.0254;
var pounds = prompt("Enter your weight in pounds");
var inches = prompt("Enter your height in inches");
var kilos = pounds * KILOGRAMS_PER_POUND;
var meters = inches * METERS_PER_INCH;
alert("Your body mass index is " + kilos / (meters * meters));
