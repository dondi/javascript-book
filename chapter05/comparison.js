var a = [3, 6, 10, 1, 40, 25, 8, 73];
alert(a.sort());                                   // Alphabetically.
alert(a.sort(function (x, y) { return x - y; }));  // Numeric ascending.
alert(a.sort(function (x, y) { return y - x; }));  // Numeric descending.
