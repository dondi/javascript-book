var renderingContext = canvas.getContext("2d");
renderingContext.fillStyle = "rgb(255, 0, 0)";
renderingContext.fillRect(10, 10, 100, 50);
renderingContext.fillStyle = "rgba(0, 255, 0, 0.5)";
renderingContext.fillRect(50, 20, 100, 50);
renderingContext.clearRect(20, 15, 75, 40);
renderingContext.strokeRect(25, 25, 75, 40);
