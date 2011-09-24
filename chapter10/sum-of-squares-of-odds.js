var square = function (x) {return x * x;};
var odd = function (x) {return x % 2 === 1;};
var plus = function (x, y) {return x + y;};

[3, 5, 2, 0, 9, 8, 6, 1].filter(odd).map(square).reduce(plus);
