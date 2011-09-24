var timeoutStr = document.getElementById("input1").value;
var timeout = parseFloat(timeoutStr) * 1000;
document.getElementById("status").innerHTML = "Wait for it...";
setTimeout(function () {
        document.getElementById('status').innerHTML = "Liftoff!";
    }, timeout);