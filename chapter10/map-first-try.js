/*
 * A first attempt at Array.prototype.map
 */
if (!Array.prototype.map) {
    Array.prototype.map = function (f) {
        var result = [];
        for (var i = 0; i < this.length; i += 1) {
            result.push(f(this[i]));
        }
        return result;
    };
}
