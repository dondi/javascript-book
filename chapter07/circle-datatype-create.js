/*
 * A circle datatype.  Synopsis:
 *
 * var c = Circle.create(5);
 * c.radius => 5
 * c.area() => 25pi
 * c.circumference() => 10pi
 */
var Circle = {};

Circle.create = function (radius) {
    var c = Object.create(this);
    c.radius = radius;
    return c;
};

Circle.area = function () {
    return Math.PI * this.radius * this.radius;
};

Circle.circumference = function () {
    return 2 * Math.PI * this.radius;
};