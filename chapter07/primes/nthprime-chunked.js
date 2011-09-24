/*
 * This script responds to clicking on the button with id "go"
 * by computing the millionth prime and writing it to the element
 * with id "answer".  The computation works by computing 10,000
 * primes at a time, with 50ms delays between chunks.  After each
 * chunk, we write progress information to the "answer" element.
 */
(function () {
    var n = 2, count = 0;
    var findMore = function () {
        Find: for (; true; n += 1) {
            for (var k = 2, last = Math.sqrt(n); k <= last; k += 1) {
                if (n % k === 0) {
                    continue Find;
                }
            }
            count += 1;
            if (count === 1000000) {
                document.getElementById("answer").innerHTML = n;
                return;
            } else if (count % 10000 === 0) {
                document.getElementById("answer").innerHTML =
                    "(found " + count + " so far)";
                setTimeout(findMore, 50);
                n += 1;
                return;
            }
        }
    }
    document.getElementById("go").onclick = findMore;
}());
