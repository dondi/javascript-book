var renderingContext = canvas.getContext("2d");
renderingContext.fillStyle = "rgb(0, 255, 255)";
renderingContext.beginPath();
renderingContext.moveTo(10, 10);
renderingContext.lineTo(110, 10);
renderingContext.lineTo(110, 60);
renderingContext.closePath();
renderingContext.fill();
renderingContext.stroke();