/*
 * A colored circle datatype, a subtype of Circle.  Synopsis:
 *
 * var c = new ColoredCircle(5, {red: 0.2, green: 0.8, blue: 0.33});
 * c.radius => 5
 * c.area() => 25pi
 * c.perimiter() => 10pi
 * c.brighten(1.1) changes color to {red: .22, green: .88, blue: .363}
 */
var ColoredCircle =  function (radius, color) {
    this.radius = radius;
    this.color = color;
};

ColoredCircle.prototype = Object.create(Circle.prototype);

ColoredCircle.prototype.brighten = function (amount) {
    this.color.red *= amount;
    this.color.green *= amount;
    this.color.blue *= amount;
};
