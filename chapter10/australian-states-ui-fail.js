/*
 * A failed attempt to create buttons labeled 0..5 that each alert
 * the name of an Australian state when clicked.
 */
onload = function () {
    for (var i = 0; i < states.length; i += 1) {
        var button = document.createElement("button");
        button.appendChild(document.createTextNode(i));
        button.onclick = function () {alert(states[i]);};
        document.body.appendChild(button);
    }
}
