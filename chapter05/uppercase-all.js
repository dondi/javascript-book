/*
 * Uppercases all the strings in an array.
 */
var uppercaseAll = function (a) {
    for (var i = 0; i < a.length; i += 1) {
        a[i] = a[i].toUpperCase();
    }
};
