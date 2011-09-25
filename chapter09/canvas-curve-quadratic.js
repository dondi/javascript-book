var renderingContext = canvas.getContext("2d");
renderingContext.strokeStyle = "rgba(0, 0, 0, 0.25)";
renderingContext.lineWidth = 0.5;
renderingContext.strokeRect(20, 20, 160, 60);

renderingContext.strokeStyle = "rgb(128, 0, 0)";
renderingContext.lineWidth = 1.0;

renderingContext.beginPath();
renderingContext.moveTo(20, 20);
renderingContext.quadraticCurveTo(180, 20, 180, 80);
renderingContext.moveTo(180, 20);
renderingContext.quadraticCurveTo(180, 80, 20, 80);
renderingContext.moveTo(180, 80);
renderingContext.quadraticCurveTo(20, 80, 20, 20);
renderingContext.moveTo(20, 80);
renderingContext.quadraticCurveTo(20, 20, 180, 20);
renderingContext.stroke();
