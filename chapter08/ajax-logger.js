// Set up some objects that everyone will want to see.
var xmlHttp,
    status = document.getElementById("status"),

/*
 * This function handles changes to a request's state.
 */
stateChanged = function () {
    // Conveniently for us, the request's state is a value from 0 to 4.
    var actions = [
        function () { status.innerHTML += "Not initialized."; },
        function () { status.innerHTML += "Setup"; },
        function () { status.innerHTML += "...Sent"; },
        function () { status.innerHTML += "...In Process"; },
        function () {
            status.innerHTML += "...Complete";
            // Deal with the data here.
        }
    ];

    // Call the function that corresponds to the new state of the request.
    actions[xmlHttp.readyState]();
};

// This is the main script sequence.
status.innerHTML = "";
if (XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = stateChanged;

    // We expect a URL in Input 1.
    xmlHttp.open("GET", document.getElementById("input1").value, true);
    xmlHttp.send(null);
} else {
    status.innerHTML = "Sorry, no Ajax!";
}
