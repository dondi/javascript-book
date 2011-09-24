/*
 * This script produces a set of prizes for a given prize level.
 * Contestants at one prize level get the prize for that level
 * plus all prizes at lower levels.  It uses an ugly form of the
 * switch statement where the cases are not walled off from
 * each other.
 */
var level = +prompt("Enter your prize level, 1-3");
var prizes = [];
switch (level) {
    case 3: prizes.push("car");
    case 2: prizes.push("ski vacation");
    case 1: prizes.push("backpack");
    default: prizes.push("certificate");
}
alert(prizes);
