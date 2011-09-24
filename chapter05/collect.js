/*
 * collect([a0, a1, a2, ...], f) returns the array
 * [f(a0), f(a1), f(a2), ...].  That is, it collects the
 * values obtained by applying f to all elements of a.
 */
var collect = function (a, f) {
    var result = [];
    for (var i = 0; i < a.length; i += 1) {
        result[i] = f(a[i]);
    }
    return result;
}
