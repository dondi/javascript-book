var squareAll = function (a) {
    return collect(a, function (x) {return x * x;});
}

var capitalizeAll = function (a) {
    return collect(a, function (x) {return x.toUpperCase();});
}
