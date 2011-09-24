var s = "A red boat";
var a = s.split(" ");        // a is ["A", "red", "boat"].
var b = [9, 3, 2, 1, 3, 7];
var c = b.slice(2, 5);       // c is [2, 1, 3].
var d = c.concat(a);         // d is [2, 1, 3, "A", "red", "boat"].
alert(d.join("**"));         // Alerts 2**1**3**A**red**boat.
