var p = { x: 10, y: 5 };
p.toString = function () {
    return "(" + this.x + "," + this.y + ")";
};
alert(p);                // Alerts (10,5).
