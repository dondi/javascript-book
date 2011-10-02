/*
 * Unit tests for the statistics module.
 */
$(document).ready(function () {

    test("Mean Tests", function () {
        same(Stats.mean([1]), 1, "1 element mean");
        same(Stats.mean([1, 7]), 4, "2 element mean");
        same(Stats.mean([-2.5, 10, -7.5]), 0, "3 element mean");
        ok(isNaN(Stats.mean([])), "mean of [] is NaN");
    });

    test("Median Tests", function () {
        same(Stats.median([9, 6, 4, 100]), 7.5, "median of four");
        same(Stats.median([3]), 3, "median of one");
        same(Stats.median([10, 12]), 11, "median of two");
        same(Stats.median([6, 3, 4, 1, 2, 5, 7]), 4, "median of many");
        ok(isNaN(Stats.median([])), "median of [] is NaN");
    });

    test("Range Tests", function () {
        same(Stats.range([9]), 0, "range of 1 element");
        same(Stats.range([1, 7]), 6, "range of 2 elements");
        same(Stats.range([-5, 4, -10, 8, 15, -7]), 25, "range of many elements");
        ok(isNaN(Stats.range([])), "range of [] is NaN");
    });
});
