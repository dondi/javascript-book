var square = function (x) {return x * x;};
var capitalize = function (x) {return x.toUpperCase();};

var squareAll = function (a) {return collect(a, square);};
var capitalizeAll = function (a) {return collect(a, capitalize);};
