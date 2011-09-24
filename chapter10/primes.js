/*
 * Determines whether n is prime. Only considers integer values in the
 * range 2 through 10 billion, and throws an exception if the argument
 * isn't.
 */
var isPrime = function (n) {
    if (n < 2 || n > 1e10 || n % 1 !== 0) {
        throw new Error("I don't feel like testing that value");
    }
    // If we've computed this before, return cached value.
    if (isPrime.cache[n] !== undefined) {
        return isPrime.cache[n];
    }
    // Otherwise, compute it. Start by assuming true....
    var answer = true;
    for (var test = 2; test <= Math.sqrt(n); test += 1) {
        if (n % test === 0) {
        // Found a divisor. It's composite. Stop looking.
            answer = false;
            break;
        }
    }
    // Save the answer in the cache and return it.
    isPrime.cache[n] = answer;
    return answer;
}
isPrime.cache = {}
