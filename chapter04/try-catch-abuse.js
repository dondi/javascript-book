// A script that might be better without exceptions
try {
    var PRIZES = ["a new car", "a broken stapler", "a refrigerator"];
    var door = prompt("Choose a door number  (1, 2, or 3)");
    var prize = PRIZES[door - 1];
    alert("You have won " + prize.toUpperCase() + "!!");
} catch (e) {
    alert("Sorry, no such door.");
}
