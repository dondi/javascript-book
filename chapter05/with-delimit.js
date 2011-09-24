var delimitWith = function (prefix, suffix) {
    return function (s) {return prefix + s + suffix;}
};
var withParentheses = delimitWith("(", ")");
var withBrackets = delimitWith("[", "]");
var withBraces = delimitWith("{", "}");
