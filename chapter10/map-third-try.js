/*
 * A third attempt at Array.prototype.map
 */
if (!Array.prototype.map) {
    Array.prototype.map = function (f) {
        var len = this.length >>> 0;
        if (typeof fun != "function") {
            throw new TypeError();
        }
        var result = new Array(len);
        for (var i = 0; i < len; i += 1) {
            result[i] = f(this[i]);
        }
        return result;
    };
}
