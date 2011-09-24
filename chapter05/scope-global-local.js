var x = 1;
// At this point the global x exists, but the global y does not.
// Using y at this point would throw a ReferenceError.
var y = 2;
// At this point, the global y now exists.
var f = function () {
    alert(z);        // This is fine! Alerts undefined.
    var z = 3;
    alert(y + z);    // Alerts 5, of course.
};
f();
