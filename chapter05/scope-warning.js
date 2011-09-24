var warning = "Don't double click the submit button";
var warn = function () {
    alert(warning);            // global variable is visible here
};
warn();         // Alerts "Don't double click the submit button".
alert(warning); // Alerts "Don't double click the submit button".
