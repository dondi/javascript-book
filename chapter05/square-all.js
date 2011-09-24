var squareAll = function (a) {
    var result = [];
    for (var i = 0; i < a.length; i += 1) {
        result[i] = a[i] * a[i];
    }
    return result;
};
