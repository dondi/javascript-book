var message = "Time for a new game";
var play = function () {
    message = "Playing";  // OOOOOPS!!! Forgot "var"
    alert(message);
};
alert(message);   // Alerts "Time for a new game"
play();           // Alerts "Playing"
alert(message);   // Alerts "Playing". FAIL!!
play();           // Alerts "Playing".
