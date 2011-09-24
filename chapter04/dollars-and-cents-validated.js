/*
 * This is the second attempt at a script to find the number of
 * dollars and cents for a given number of pennies.
 */
var pennies = prompt("Enter a number of cents");
if (isNaN(pennies)) {
    alert("That's not a number");
} else if (pennies < 0) {
    alert("That number is too small");
} else if (pennies >= 9E15) {
    alert("That number is too large");
} else if (pennies % 1 !== 0) {
    alert("I can only handle whole numbers");
} else {
    var dollars = Math.floor(pennies / 100);
    var cents = pennies % 100;
    alert("That's " + dollars + " dollars and " + cents + " cents");
}
