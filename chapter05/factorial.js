/*
 * Returns the factorial of n.  Precondition: n is an integer between
 * 0 and 21, inclusive.  (Beyond 21, it returns an approximation.)
 */
var factorial = function (n) {
    var result = 1;
    for (var i = 1; i <= n; i += 1) {
        result *= i;
    }
    return result;
};
