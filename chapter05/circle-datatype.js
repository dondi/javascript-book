/*
 * A circle datatype.  Synopsis:
 *
 * var c = Circle(5);
 * c.radius => 5
 * c.area() => 25pi
 * c.circumference() => 10pi
 */
var Circle = function (r) {
    var circle = Object.create(Circle.prototype);
    circle.radius = r;
    return circle;
};

Circle.prototype = {
    area: function () {return Math.PI * this.radius * this.radius;},
    circumference: function () {return 2 * Math.PI * this.radius;}
};
