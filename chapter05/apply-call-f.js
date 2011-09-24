var f = function (a, b, c) {this.x += a + b + c;};
var a = {x: 1, y: 2};
f.apply(a, [10, 20, 5]);    // Calls f(10, 20, 5), using 'a' as this.
f.call(a, 3, 4, 15);        // Calls f(3, 4, 15), using 'a' as this.
alert(a.x);                 // Alerts 58.
