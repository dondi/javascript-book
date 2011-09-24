/*
 * Returns whether n is prime. Precondition: n is an integer greater
 * than or equal to 2, and within JavaScript's main contiguous range of
 * representable integers.
 */
var isPrime = function (n) {
    for (var k = 2, last = Math.sqrt(n); k <= last; k += 1) {
        if (n % k === 0) {
            return false;
        }
    }
    return true;
};
