/* Values that we need throughout the life of the page. */
var stopwatchIntervalId;
var baseMilliseconds = 0;
var startTime;

/* Starts the timer; updates occur every 100th of a second. */
var startTimer = function () {
    // Remember when we started.
    startTime = (new Date()).getTime();
    document.getElementById("toggleTimer").value = "Stop";
    document.getElementById("toggleTimer").onclick = stopTimer;
    stopwatchIntervalId = setInterval("updateTime();", 10); // Every 100th of a second.
};

/* Stops the timer. */
var stopTimer = function () {
    // Stop updating.
    clearInterval(stopwatchIntervalId);

    // While we're updating by 100ths of a second, we still measure time
    // to the millisecond.
    baseMilliseconds += ((new Date()).getTime() - startTime);
    setStopwatchTime(baseMilliseconds);
    document.getElementById("toggleTimer").value = "Start";
    document.getElementById("toggleTimer").onclick = startTimer;
};

/* Resets the timer to zero. */
var resetTimer = function () {
    // Stop the timer in case it's still running.
    stopTimer();
    
    // Reset, then refresh the display.
    baseMilliseconds = 0;
    setStopwatchTime(baseMilliseconds);
};

/* Calculates the current elapsed time and displays it. */
var updateTime = function () {
    setStopwatchTime(baseMilliseconds + ((new Date()).getTime() - startTime));
}

/* Pads the given value to the given number of digits, if not already that long. */
var padZeroes = function (value, maxDigits) {
    var base = 10;
    var zeroDigit = "0";
    var startPower = Math.pow(base, (maxDigits - 1));
    
    // We're taking advantage of duck typing here.
    var result = value;
    for (var currentPower = startPower; currentPower >= base; currentPower /= base) {
        if (result < currentPower) {
            result = zeroDigit + result;
        }
    }
    
    return result;
};

/* Sets the currently-displayed stopwatch time to the given number of milliseconds. */
var setStopwatchTime = function (milliseconds) {
    // Milliseconds.
    var timeString = padZeroes(milliseconds % 1000, 3);
    var difference = Math.floor(milliseconds / 1000);
    timeString = padZeroes(difference % 60, 2) + ":" + timeString;
    difference = Math.floor(difference / 60);
    timeString = padZeroes(difference % 60, 2) + ":" + timeString;
    difference = Math.floor(difference / 60);
    timeString = padZeroes(difference, 2) + ":" + timeString;
    document.getElementById("currentTime").innerHTML = timeString;
};

/* Reset things the first time through. */
resetTimer(0);
