// BAD CODE - DO NOT DO THIS
var Circle = function (r) {
    return {
        radius: r,
        area: function () {return Math.PI * this.radius * this.radius;},
        circumference: function () {return 2 * Math.PI * this.radius;}
    };
};
var c1 = Circle(2);     // Creates a circle with radius 2.
var c2 = Circle(10);    // Creates a circle with radius 10.
alert(c2.area());       // Alerts 314.1592653589793
