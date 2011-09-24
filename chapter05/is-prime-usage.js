var SMALLEST = 2, BIGGEST = 9E15;
var n = prompt("Enter a number and I'll check if it's prime");
if (isNaN(n)) {
    alert("That wasn't a number");
} else if (n < SMALLEST) {
    alert("I can't test numbers that small");
} else if (n > BIGGEST) {
    alert("That number is too large for me to test");
} else if (n % 1 !== 0) {
    alert("I can only test integers");
} else {
    alert(n + " is " + (isPrime(n) ? "prime" : "composite"));
}
