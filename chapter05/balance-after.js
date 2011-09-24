/*
 * Returns the balance after t years of an account
 * where the initial balance of p has been compounded n
 * times per year with an annual interest rate of r.
 */
var balanceAfter = function (p, n, r, t) {
    return p * Math.pow(1 + (r / n), n * t);
};
