/*
 * Returns the factorial of n. Precondition: n is a non-negative integer.
 */
var factorial = function (n) {
    return n <= 1 ? 1 : factorial(n-1) * n;
};
