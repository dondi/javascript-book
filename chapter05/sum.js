/*
 * Returns the sum of all the elements in an array.
 */
var sum = function (a) {
    var result = 0;
    for (var i = 0; i < a.length; i += 1) {
        result += a[i];
    }
    return result;
};
