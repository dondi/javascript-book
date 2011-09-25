var renderingContext = canvas.getContext("2d");
var xStep = 25, yStep = -100;

// We now have variables to represent the absolute position,
// rotation, and scaling of the ball.
var x = 50, y = 300, angle = 0;
var compression = 0.5;

// Start the ball at the bottom-left of the canvas.
for (var i = 0; i < 19; i += 1) {
    // Always return to the same state after each iteration.
    renderingContext.save();

    // Move the ball to the current position.
    renderingContext.translate(x, y);

    // Scale and rotate the ball.
    renderingContext.scale(1, compression);
    renderingContext.rotate(angle);

    // *Now* draw.
    drawBasketball(renderingContext);

    // Calculate the new position, rotation, and scale.
    x += xStep; y += yStep; yStep += 25;
    angle += 10 * Math.PI / 180; // 10 degrees.
    compression += (compression <= 0.9) ? 0.1 : 0;

    // Quick check to see if the ball has hit the "floor."
    // This results in a "bounce."
    if (y + yStep > 300) {
        compression = 0.5;
        y = 300; yStep = -100;
    }

    renderingContext.restore();
}
