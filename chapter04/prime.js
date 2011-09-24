var SMALLEST = 2;
var BIGGEST = 9E15;
var n = prompt("Enter a number and I'll check if it is prime");
if (isNaN(n) || n < SMALLEST || n > BIGGEST || n % 1 !== 0) {
    alert("I can only test integers between " + SMALLEST +
        " and " + BIGGEST);
} else {
    var foundDivisor = false;
    for (var k = 2, last = Math.sqrt(n); k <= last; k += 1) {
        if (n % k === 0) {
            foundDivisor = true;
            break;
        }
    }
    alert(n + " is " + (foundDivisor ? "not " : "") + "prime");
}
