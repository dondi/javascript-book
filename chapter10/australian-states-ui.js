/*
 * A script to provide buttons labeled 0..5, each alerting the name
 * of an Australian state when clicked.
 */
onload = function () {
    var showInfo = function () {
        alert(states[this.stateIndex]);
    }
    for (var i = 0; i < states.length; i += 1) {
        var button = document.createElement("button");
        button.appendChild(document.createTextNode(i));
        button.stateIndex = i;
        button.onclick = showInfo;
        document.body.appendChild(button);
    }
};
