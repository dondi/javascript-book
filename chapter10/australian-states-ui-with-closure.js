/*
 * A script to provide buttons labeled 0..5, each alerting the name
 * of an Australian state when clicked. Each event handler is a
 * closure.
 */
onload = function () {
    for (var i = 0; i < states.length; i += 1) {
        var button = document.createElement("button");
        button.appendChild(document.createTextNode(i));
        button.onclick = function (i) {
            return function () {alert(states[i]);};
        }(i);
        document.body.appendChild(button);
    }
};
