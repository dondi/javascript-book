// Does not work on IE prior to version 9.
document.getElementById("header").addEventListener("click",
    function () { alert(this.innerHTML); },
    false
);
