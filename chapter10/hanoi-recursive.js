/*
 * Displays HTML instructions for moving n disks from tower a
 * to tower b using tower c as the temporary holding place.
 * Precondition: n is an integer, and a, b, and c are distinct
 * strings.
*/
var hanoi = function (n, a, b, c) {
    if (n !== 0) {
        hanoi(n - 1, a, c, b);
        document.write("Move from " + a + " to " + b + "<br />");
        hanoi(n - 1, c, b, a);
    }
};
