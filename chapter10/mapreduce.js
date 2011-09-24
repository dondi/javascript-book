/*
 * Given an array a, filters with function f, then maps it with m,
 * then reduces it with r.
 */
var mapreduce = function (a, f, m, r) {
    return a.filter(f).map(m).reduce(r);
}
