// Alerts the number of zeros in an array.
var a = [7, 3, 0, 0, 9, -5, 2, 1, 0, 1, 7];
var numberOfZeros = 0;
for (var i = 0, n = a.length; i < n; i += 1) {
    if (a[i] === 0) {
        numberOfZeros += 1;
    }
}
alert(numberOfZeros);
