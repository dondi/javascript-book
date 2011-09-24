/*
 * Returns the balance after t years of an account
 * where the initial balance of p has been compounded n
 * times per year with an annual interest rate of r.  If n
 * is negative, the function throws a string saying so.
 */
var balanceAfter = function (p, n, r, t) {
    if (n < 0) {
        throw "Cannot compound a negative number of times";
    }
    return p * Math.pow(1 + (r / n), n * t);
};
