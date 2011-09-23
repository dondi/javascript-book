var total = 1000;
var year = 0;
while (total < 5000) {
    year = year + 1;
    total = total * 1.05;
    $("#footer").append("<div>After year " + year +
        " you have $" + total.toFixed(2) + "</div>");
}
