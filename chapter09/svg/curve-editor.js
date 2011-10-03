/*
 * Returns the coordinates of the center of the given curve vertex, which
 * is expected to be a rect element.
 */
var getCenter = function (vertex) {
    return {
        x: +vertex.getAttribute("x") + (vertex.getAttribute("width") / 2),
        y: +vertex.getAttribute("y") + (vertex.getAttribute("height") / 2)
    };
};

/*
 * Returns the coordinates of the center of the given curve control point,
 * which is expected to be a circle element.
 */    
var getControlCenter = function (control) {
    return {
        x: control.getAttribute("cx"),
        y: control.getAttribute("cy")
    };
};

/*
 * Sets the properties of the given vertex-to-control-point connector according
 * to the given vertex and control point.  The connector element is expected to
 * be a line element.
 */
var updateConnector = function (connectorElement, vertex, controlPoint) {
    connectorElement.setAttribute("x1", vertex.x);
    connectorElement.setAttribute("y1", vertex.y);
    connectorElement.setAttribute("x2", controlPoint.x);
    connectorElement.setAttribute("y2", controlPoint.y);
};

/*
 * Updates the data string for the given path to be the curve defined by
 * the given vertex elements (rect), control point elements (circle), and
 * vertex-to-control-point connectors (line).
 */
var updateCurve = function (startVertexElement, endVertexElement,
  startControlElement, endControlElement,
  startConnectorElement, endConnectorElement, path) {
    // Grab the data needed for the path.
    var startVertex = getCenter(startVertexElement),
        endVertex = getCenter(endVertexElement),
        startControl = getControlCenter(startControlElement),
        endControl = getControlCenter(endControlElement);

    // Build the path data string.        
    var pathData = "M" + startVertex.x + "," + startVertex.y + " ";
    pathData += "C" + startControl.x + "," + startControl.y + " ";
    pathData += endControl.x + "," + endControl.y + " ";
    pathData += endVertex.x + "," + endVertex.y;
    
    // Assign the new data string to the path.
    path.setAttribute("d", pathData);

    // Update the indicator lines.
    updateConnector(startConnectorElement, startVertex, startControl);
    updateConnector(endConnectorElement, endVertex, endControl);
};
