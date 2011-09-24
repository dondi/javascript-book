/*
 * Returns the greatest common denominator of a and b. Precondition:
 * a and b are both non-negative integers.
 */
var gcd = function (a, b) {
    return a === b ? a : a < b ? gcd(a, b-a) : gcd(b, a-b);
};
