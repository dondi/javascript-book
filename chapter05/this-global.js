this.x = 2;          // Set the x property of the global object.
alert(x);            // Alerts 2.

var f = function (x) {
    this.y = x + 1;
};
f(2);                // f is called as a global function.
alert(y);            // Alerts 3.
