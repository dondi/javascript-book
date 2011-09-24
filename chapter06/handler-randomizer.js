/*
 * We prepare three possible event handlers in an array.
 */
var handlers = [
    function () {
        document.getElementById("input1").value = Date.now();
        setRandomHandler();
    },

    function () {
        alert("Hello events!");
        setRandomHandler();
    },

    function () {
        alert(prompt("Type something to capitalize:").toUpperCase());
        setRandomHandler();
    }
];

/*
 * Define a function that sets an event handler for the
 * "status" element at random.
 */
var setRandomHandler = function () {
    document.getElementById("status").onclick =
        handlers[Math.floor(Math.random() * 3)];
};

// Set the (initial) event handler.
setRandomHandler();
