var a = {x: 1, y: 2};
var b = a;
var c = {x: 1, y: 2};
b.y = 3;
alert(a.y);    // 3
