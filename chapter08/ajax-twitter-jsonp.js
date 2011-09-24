$("#footer").html("");

window.displayObject = function (data) {
    $("#footer").append($("<pre></pre>").text(JSON.stringify(data)));
};

var script = document.createElement("script");
script.type = "text/javascript";
script.src = "http://api.twitter.com/1/trends/weekly.json?callback=displayObject";
document.body.appendChild(script);
document.body.removeChild(script);
