$(document).ready(function () {

    module("Binary Search");

    // Test empty array
    test("Exmpty array", function () {
        ok(binarySearch([], 100) === -1);
    });

    // Test one element array
    test("One element array", function () {
        ok(binarySearch([5], 5) === 0);
        ok(binarySearch([5], 8) === -1);
    });

    // Tests that all values, in every position, can be found, and that
    // we get -1 for values below, in between, and above all positions.
    test("Larger array", function () {
        var a = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        for (var i = 0; i < a.length; i += 1) {
            ok(binarySearch(a, a[i]) === i, "Found " + a[i]);
        }
        for (var x = -5; x <= 105; x += 10) {
            ok(binarySearch(a, x) === -1, x + " should be missing");
        }
    });
});
