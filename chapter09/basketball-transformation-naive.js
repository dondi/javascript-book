var renderingContext = canvas.getContext("2d");
var xStep = 25, yStep = -100;

// Start the ball at the bottom left of the canvas,
// and compressed vertically due to a bounce.
renderingContext.translate(50, 300);
renderingContext.scale(1, 0.5);
for (var i = 0; i < 19; i += 1) {
    drawBasketball(renderingContext);
    // Rotate and scale the ball.
    renderingContext.rotate(10 * Math.PI / 180); // 10 degrees.
    renderingContext.scale(1, 1.1);
    // Move the ball by the current step values.
    renderingContext.translate(xStep, yStep);
    yStep += 25;

    // Check to see if the ball needs to bounce.
    if (yStep > 100) {
        yStep = -100;
    }
}
