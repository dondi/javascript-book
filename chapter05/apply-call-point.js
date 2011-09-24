var Point = function (x, y) {
    this.x = x;
    this.y = y;
};
var p = {z: 3};
Point.apply(p, [2, 9]);     // Now p is {x: 2, y: 9, z: 3}
Point.call(p, 10, 4);       // Now p is {x: 10, y: 4, z: 3}
