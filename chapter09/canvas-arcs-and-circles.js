var renderingContext = canvas.getContext("2d");
for (var i = 0; i < 4; i += 1) {
    for (var j = 0; j < 3; j += 1) {
        renderingContext.beginPath();
        var x = 25 + (j * 50);
        var y = 25 + (i * 50);
        var radius = 20;
        var startAngle = 0;
        var endAngle = Math.PI + ((Math.PI * j) / 2);
        var anticlockwise = ((i % 2) === 0) ? false : true;

        renderingContext.arc(x, y, radius,
            startAngle, endAngle, anticlockwise);

        if (i > 1) {
            renderingContext.fill();
        } else {
            renderingContext.stroke();
        }
    }
}
