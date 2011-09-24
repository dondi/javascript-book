/*
 * Eliminates all nondigits from the given string.
 */
var restrictToDigits = function (string) {
    return string.replace(/[^\d]/g, "");
};

/*
 * Checks if the given value is all digits.
 */
var isAllDigits = function (string) {
    return string.match(/^\d*$/);
};

/*
 * Rejects nondigit keypresses.
 */
var handleInputKeyPress = function (e) {
    if (!e) e = event;
    if (!isAllDigits(String.fromCharCode(e.charCode))) {
        // Make sure keypress doesn't cause a character to appear
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    }
};

/*
 * Rejects nondigits in this.value, and reselects the text field.
 */
var handleInputBlur = function () {
    if (!isAllDigits(this.value)) {
        alert("Sorry, only 0-9 are allowed here.");
        this.value = restrictToDigits(this.value);
        this.select();
    }
};

document.getElementById("input1").onkeypress = handleInputKeyPress;
document.getElementById("input2").onblur = handleInputBlur;
