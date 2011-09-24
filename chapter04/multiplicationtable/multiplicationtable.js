var SIZE = 12;
document.write("<table border='1' cellspacing='0'>");
for (var i = 1; i <= SIZE; i += 1) {
    document.write("<tr>");
    for (var j = 1; j <= SIZE; j += 1) {
        document.write("<td>" + (i * j) + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
