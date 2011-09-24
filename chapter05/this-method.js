var f = function (x) {
    this.y = x + 1;
};
var a = {y: 10, op: f};
var b = {y: 20, increment: f};

a.op(100);          // f is called through a.
alert(a.y);         // Alerts 101.
b.increment(43);    // f is called through b.
alert(b.y);         // Alerts 44.
