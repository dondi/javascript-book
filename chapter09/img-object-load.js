var image = new Image();
image.onload = function () {
    var renderingContext = canvas.getContext("2d");
    renderingContext.drawImage(image, 0, 0);
};
image.src = "/images/bookcover.jpg";
