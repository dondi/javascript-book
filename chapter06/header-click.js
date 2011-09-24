// Alert something when the element with id "header" is clicked.
//
// Works in all browsers.
document.getElementById("header").onclick =
    function () { alert(this.innerHTML); };
