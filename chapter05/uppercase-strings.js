/*
 * Returns a new array that is equivalent to its input array
 * with its elements uppercased.
 */
var uppercaseStrings = function (a) {
    var result = [];
    for (var i = 0; i < a.length; i += 1) {
        result.push(a[i].toUpperCase());
    }
    return result;
};
