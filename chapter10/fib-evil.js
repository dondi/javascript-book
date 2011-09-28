/*
 * EVIL function to compute the kth Fibonacci number. Precondition: k is
 * a nonnegative integer less than 75. (Beyond the 75th Fibonacci number,
 * the values are outside the range of contiguous integers JavaScript can
 * represent exactly.
 */
var fib = function (k) {
    return (k <= 1) ? k : fib(k - 1) + fib(k - 2);
}
