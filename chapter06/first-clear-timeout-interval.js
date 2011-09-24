// When starting a timeout or interval, save the returned ID.
var timeoutID = setTimeout(someFunction, someDuration);
var intervalID = setInterval(anotherFunction, anotherDuration);

/* ...any other code runs here... */

// Whenever a timeout or interval must be canceled, invoke:
clearTimeout(timeoutID);
clearInterval(intervalID);