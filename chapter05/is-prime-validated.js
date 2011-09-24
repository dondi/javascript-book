/*
 * Returns whether its argument is a prime number in the range 2..9e15.
 * Throws an exception if its argument is not an integer, or is out of
 * the range 2..9e15.
 */
var isPrime = function (n) {
    if (n % 1 !== 0 || n < 2 || n > 9E15) {
        throw "Number is not an integer or is out of range";
    }
    for (var k = 2, last = Math.sqrt(n); k <= last; k += 1) {
        if (n % k === 0) {
            return false;
        }
    }
    return true;
};
