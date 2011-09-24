/*
 * Returns an array containing the first 75 fibonacci numbers.
 */
var fibonacciSequence = function () {

    // Start with the first two fibonacci numbers
    var f = [0, 1];

    // Compute the 3rd through the 75th numbers
    for (var i = 3; i <= 75; i += 1) {
        f.push(f[f.length - 1] + f[f.length - 2]);
    }
    return f;
};
