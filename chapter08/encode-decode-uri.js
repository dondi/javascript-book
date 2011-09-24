var input = document.getElementById("input1").value;
var status = document.getElementById("status");

status.style.textAlign = "left";
status.innerHTML = "<b>encodeURI:</b> " + encodeURI(input) + "<br/>" +
    "<b>encodeURIComponent:</b> " + encodeURIComponent(input) + "<br/>" +
    "<b>decodeURI:</b> " + decodeURI(input) + "<br/>" +
    "<b>decodeURIComponent:</b> " + decodeURIComponent(input);
