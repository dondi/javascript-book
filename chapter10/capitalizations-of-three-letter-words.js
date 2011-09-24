var capitalize = function (s) {return s.toUpperCase();};
var isThreeLetterWord = function (s) {return s.length === 3;};
var addHyphen = function (s, t) {return s + "-" + t;};

["the","really","old","cat","is","home"].
    filter(isThreeLetterWord).
    map(capitalize).
    reduce(addHyphen);
