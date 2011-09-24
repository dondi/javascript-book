var count = {};
var alwaysTrue = function (s) {return true;}
var record = function (s) {
    s = s.toLowerCase();
    if (count[s]) count[s] += 1; else count[s] = 1;
	return [s, count[s]];
};

var moreFrequent = function (p, q) {return p[1] > q[1] ? p : q};

["the","rAT", "A","car","bat","rat","the","rat","Rat","a"].
    filter(alwaysTrue).
    map(record).
    reduce(moreFrequent);
