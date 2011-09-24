/*
 * Returns the largest element in an array.
 */

// Alternative "full disclosure" comment:
/*
 * Returns the largest element in an array.  If the array
 * contains values that are incomparable, the function returns
 * some unspecified, arbitrary value.
 */

// Precondition convention in comments:
/*
 * Returns the largest element in an array.  Precondition: All of the
 * elements in the array are mutually comparable.
 */
var max = function (a) {
    var largest = a[0];
    for (var i = 1; i < a.length; i += 1) {
        if (a[i] > largest) {
            largest = a[i];
        }
    }
    return largest;
};
