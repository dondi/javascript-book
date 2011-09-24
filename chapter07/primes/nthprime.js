/*
 * This script responds to clicking on the button with id "go"
 * by computing the millionth prime and writing it to the element
 * with id "answer".  TERRIBLE CODE: Clicking on the button will
 * hang the user interface until the computation finishes!
 */
document.getElementById("go").onclick = function () {
    Find: for (var n = 2, count = 0; count < 1000000; n += 1) {
        for (var k = 2, last = Math.sqrt(n); k <= last; k += 1) {
            if (n % k === 0) {
                continue Find;
            }
        }
        count += 1;
    }
    // Because the silly for loop goes too far...
    document.getElementById("answer").innerHTML = (n - 1);
}
