var hanoi = function (n) {
    for (var t = 1; t < 1 << n; t += 1) {
    document.write("Move from " + ((t & t - 1) % 3) + " to " +
        (((t | t - 1) + 1) % 3) + "<br />");
    }
};
