document.getElementById("wonder").onclick = function (e) {
    if (!e) e = event;
    var status = document.getElementById("status");
    var selection = this.options[this.selectedIndex].text;
    status.innerHTML = event.shiftKey ? selection.toUpperCase() :
        event.altKey ? selection.toLowerCase() :
        selection;
};
