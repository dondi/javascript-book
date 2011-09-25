var canvas = document.createElement("canvas");
canvas.width = 512;
canvas.height = 512;
document.body.appendChild(canvas);

var image = new Image();
image.onload = function () {
    var renderingContext = canvas.getContext("2d");
    renderingContext.drawImage(image, 0, 0);
};
image.src = "/images/bookcover.jpg";
