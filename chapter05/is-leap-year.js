/*
 * Returns whether a given year is a leap year, according to the
 * usual rules of the Gregorian calendar.  A year is a leap year
 * if it is (1) divisible by 4 but not 100, or else (2) is divisible
 * by 400.
 */
var isLeapYear = function (y) {
    return divides(4, y) && !divides(100, y) || divides(400, y);
};
