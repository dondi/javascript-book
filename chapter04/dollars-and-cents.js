/*
 * This is the first attempt at a script to find the number of
 * dollars and cents for a given number of pennies.
 */
var pennies = prompt("Enter a number of (U.S.) pennies");
var dollars = Math.floor(pennies / 100);
var cents = pennies % 100;
alert("That's " + dollars + " dollars and " + cents + " cents");
