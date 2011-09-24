/*
 * A circle datatype.  Synopsis:
 *
 * var c = new Circle(5);
 * c.radius => 5
 * c.area() => 25pi
 * c.circumference() => 10pi
 */
var Circle = function (r) {
    this.radius = r;
};

Circle.prototype.area = function () {
    return Math.PI * this.radius * this.radius;
};

Circle.prototype.circumference = function () {
    return 2 * Math.PI * this.radius;
};
