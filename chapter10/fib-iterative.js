/*
 * Returns the kth Fibonacci number. Precondition: k is a
 * nonnegative integer less than 75.
 */
var fib = function (k) {
    if (k <= 1) {
        return k;
    }
    var a = 0;
    var b = 1;
    for (var i = 2; i <= k; i += 1) {
        var old_a = a;
        a = b;
        b = old_a + b;
    }
    return b;
}
