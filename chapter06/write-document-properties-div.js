var footer = document.getElementById("footer");
footer.innerHTML = "<h3>document properties:</h3>";
var properties = [];
for (var property in document) {
    properties.push(property + " ");
}
footer.innerHTML += "<p>" + properties.join("<br/>") + "</p>";
