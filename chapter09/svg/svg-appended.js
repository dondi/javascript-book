var svgns = "http://www.w3.org/2000/svg";

var svg = document.createElementNS(svgns, "svg");
svg.setAttribute("width", 256);
svg.setAttribute("height", 256);
svg.setAttribute("viewBox", "0 0 50 50");

var shape = document.createElementNS(svgns, "circle");
shape.setAttribute("cx", 25);
shape.setAttribute("cy", 25);
shape.setAttribute("r",  10);
shape.setAttribute("fill", "green");
svg.appendChild(shape);

document.body.appendChild(svg);
