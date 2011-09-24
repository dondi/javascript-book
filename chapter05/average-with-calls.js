var average = function (x, y) {
    average.calls += 1;
    return (x + y) / 2;
}
average.calls = 0;

alert(average(4, 8));      // Alerts 6.
alert(average(10.5, 11));  // Alerts 10.75.
alert(average(0, 1));      // Alerts 0.5.
alert(average.calls);      // Alerts 3.
