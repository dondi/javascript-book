/*
 * A rectangle datatype.  Synopsis:
 *
 * var r = Rectangle(5, 4);
 * r.width => 5
 * r.height => 4
 * r.area() => 20
 * r.perimeter() => 18
 */
var Rectangle = function (w, h) {
    var rectangle = Object.create(Rectangle.prototype);
    rectangle.width = w;
    rectangle.height = h;
    return rectangle;
};

Rectangle.prototype = {
    area: function () {return this.width * this.height;},
    perimeter: function () {return 2 * (this.width * this.height);}
};
