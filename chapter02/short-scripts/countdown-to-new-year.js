var now = new Date();
var newYear = new Date(now.getFullYear() + 1, 0, 1);
var days = (newYear - now) / 86400000;
alert("From " + now + ", " + days + " days until the New Year!");
