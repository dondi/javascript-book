/*
 * Returns the kth Fibonacci number, using recursion and a cache.
 * Precondition: k is a nonnegative integer less than 75.
*/
var fib = function (k) {
 
    // Use cached result if we've computed fib(k) before.
    if (fib.cache[k] !== undefined) {
        return fib.cache[k];
    }
    var answer = k;
    if (k > 1) {
        answer = fib(k - 1) + fib(k - 2);
    }
 
    // Cache the answer and return it.
    fib.cache[k] = answer;
    return answer;
}
fib.cache = {}
