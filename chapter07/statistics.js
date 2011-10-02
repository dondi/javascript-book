/*
 * A small module containing statistics functions.
 */
var Stats = {

    /*
     * Returns the mean (average) of the elements in a. Precondition:
     * a is an array of finite numbers.
     */
    mean: function (a) {
        var sum = 0;
        for (var i = 0; i < a.length; i += 1) {
            sum += a[i];
        }
        return sum / a.length;
    },

    /*
     * Returns the median of the elements in a. Precondition: a is an
     * array of finite numbers.
     */
    median: function (a) {
        var b = a.sort(function (x, y) {return x - y;});
        var mid = Math.floor(b.length / 2);
        return b.length % 2 !== 0 ? b[mid] : (b[mid-1] + b[mid]) / 2;
    },

    /*
     * Returns the range (difference between the max and min) of the
     * elements in a. Precondition: a is an array of finite numbers.
     */
    range: function (a) {
        return Math.max.apply(Math, a) - Math.min.apply(Math, a);
    }
};
