renderingContext.strokeStyle = "rgb(128, 0, 0)";
renderingContext.beginPath();
renderingContext.moveTo(20, 20);
renderingContext.bezierCurveTo(180, 20, 180, 80, 20, 80);
renderingContext.stroke();

renderingContext.strokeStyle = "rgb(0, 128, 0)";
renderingContext.beginPath();
renderingContext.moveTo(180, 20);
renderingContext.bezierCurveTo(20, 20, 20, 80, 180, 80);
renderingContext.stroke();

renderingContext.strokeStyle = "rgb(0, 0, 128)";
renderingContext.beginPath();
renderingContext.moveTo(180, 80);
renderingContext.bezierCurveTo(180, 20, 20, 20, 20, 80);
renderingContext.stroke();

renderingContext.strokeStyle = "rgb(128, 0, 128)";
renderingContext.beginPath();
renderingContext.moveTo(180, 20);
renderingContext.bezierCurveTo(180, 80, 20, 80, 20, 20);
renderingContext.stroke();
