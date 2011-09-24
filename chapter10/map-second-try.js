/*
 * A second attempt at Array.prototype.map
 */
if (!Array.prototype.map) {
    Array.prototype.map = function (f) {
        var result = new Array(this.length);
        for (var i = 0; i < this.length; i += 1) {
            result[i] = f(this[i]);
        }
        return result;
    };
}
