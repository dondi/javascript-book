/*
 * A very poor sequence generator.  It does not hide its state.
 */
var g = {
    x: 0.01,
    next: function () {
        var result = this.x;
        this.x = 4 * this.x - 3 * this.x * this.x;
        return result;
    }
};
