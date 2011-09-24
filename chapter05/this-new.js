var Point = function (x, y) {
    this.x = x;
    this.y = y;
};
var p = new Point(4, -5);  // New point created.
var q = Point(3, 8);       // DANGER! DANGER! Sets global x and y!
