/*
 * Returns the greatest common denominator of a and b. Precondition:
 * a and b are both non-negative integers.
 */
var gcd = function (a, b) {
    if (a === b) {
        return a;
    } else if (a < b) {
        return gcd(a, b-a);
    } else {
        return gcd(a-b, b);
    }
};
