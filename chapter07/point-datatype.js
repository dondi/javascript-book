/*
 * A point datatype.  Synopsis:
 *
 * var p = new Point(-3, 4);
 * var q = new Point(9, 9);
 * p.x => -3
 * p.y => 4
 * p.distanceToOrigin() => 5
 * p.distanceTo(q) => 13
 * p.midpointTo(q) => A point object at x=3, y=6.5
 */
var Point = function (x, y) {
    this.x = x || 0;
    this.y = y || 0;
};

Point.prototype.distanceToOrigin = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

Point.prototype.distanceTo = function (q) {
    var deltaX = q.x - this.x;
    var deltaY = q.y - this.y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
};

Point.prototype.midpointTo = function (q) {
    return new Point((this.x + q.x) / 2, (this.y + q.y) / 2);
};
