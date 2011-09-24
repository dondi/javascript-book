var echo = function (message) {
    alert(message + ".");
    alert("I said: " + message + "!");
};
echo("Sanibonani");     // The natural way to call this function.
var x = echo("Hello");  // Assigns undefined to x, but not done in practice.
