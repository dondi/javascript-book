alert(isFinite(-100));              // true
alert(isFinite(2E200 * 2E200));     // false
alert(isFinite("abcdef"));          // false, because converts to NaN
alert(isFinite(null));              // true, because converts to 0

var s = prompt("Enter a numeric formula");
if (/[^\d()+*/-]/.test(s)) {
    alert("I don't trust that input");
} else {
    alert(eval(s));
}
