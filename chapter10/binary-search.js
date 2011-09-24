/*
 * Returns an index position of the value x in the array a,
 * or -1 if x is not in a. Precondition: array a is sorted.
*/
var binarySearch = function (a, x) {

    /*
     * Returns an index position of the value x in the array a
     * between the index first (inclusive) and last (exclusive).
     */
    var search = function (first, last) {
        // Basis: if your range is empty, you haven't found it
        if (first >= last) {
            return -1;
        }

        // Find the midpoint and recurse if necessary
        var mid = Math.floor((first + last) / 2);
        if (a[mid] === x) {
            return mid;
        } else if (a[mid] < x) {
            return search(mid + 1, last);
        } else {
            return search(first, mid);
        }
    };

    // Searches for x in the whole of a.
    return search(0, a.length);
}
