var renderingContext = canvas.getContext("2d");
var xStep = 25, yStep = -100;

// Start the ball at the bottom-left of the canvas.
renderingContext.translate(50, 300);
for (var i = 0; i < 19; i += 1) {
    drawBasketball(renderingContext);
    // Move the ball by the current step values.
    renderingContext.translate(xStep, yStep);
    yStep += 25;

    // Check to see if the ball needs to bounce.
    if (yStep > 100) {
        yStep = -100;
    }
}
