/*
 * A generator for the sequence x -> 4x - 3x^2 starting at 0.01.
 */
var g = function () {
    var x = 0.01;
    return {
        next: function () {
            var result = x;
            x = 4 * x - 3 * x * x;
            return result;
        }
    };
}();
