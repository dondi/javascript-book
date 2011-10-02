var footer = document.getElementById("footer");
footer.innerHTML = "Look, ma, no images!";

// Mozilla version: WebKit ignores this.
document.body.style.backgroundImage =
    "-moz-linear-gradient(left, lightgray, white)";
footer.style.backgroundImage =
    "-moz-radial-gradient(25% 50%, circle," +
    "white 0%, rgb(200, 0, 0) 50%, rgb(128, 0, 0) 100%)";

// WebKit version: Mozilla ignores this.
document.body.style.backgroundImage =
    "-webkit-gradient(linear, 0% 0%, 100% 0%," +
    "color-stop(0, lightgray), color-stop(1, white))";
footer.style.backgroundImage =
    "-webkit-gradient(radial, 25% 50%, 0, 50% 100%, 750," +
    "color-stop(0, white), color-stop(0.5, rgb(200, 0, 0))," +
    "color-stop(1, rgb(128, 0, 0)))";

// CSS3 version: the latest browsers take this.
document.body.style.backgroundImage =
    "linear-gradient(left, lightgray, white)";
footer.style.backgroundImage =
    "radial-gradient(25% 50%, circle," +
    "white 0%, rgb(200, 0, 0) 50%, rgb(128, 0, 0) 100%)";
