/*
 * For maximum modularity, we place everything within a single function that
 * takes the canvas that it will need.
 */
var startSierpinski = function (canvas) {
    
    // Grab the WebGL rendering context.
    var gl = canvas.getContext("experimental-webgl");
    if (!gl) {
        alert("No WebGL context found...sorry.");

        // No WebGL, no use going on...
        return;
    }

    // Set up everything that is needed for the scene.
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.viewport(0, 0, canvas.width, canvas.height);

    // Build the tetrahedrons within the gasket.  We have a "starter" tetrahedron
    // which then gets divided to the degree that we require.  Doing this right
    // requires a few supporting functions, which we define first.
    /*
     * This function returns the midpoint of two 3D points.
     */
    var midpoint = function (point1, point2) {
        return [(point1[0] + point2[0]) / 2,
            (point1[1] + point2[1]) / 2,
            (point1[2] + point2[2]) / 2];
    };

    /*
     * This function returns the vector from the first 3D point to the second.
     */
    var vector = function (point1, point2) {
        return [ point2[0] - point1[0], point2[1] - point1[1], point2[2] - point1[2] ];
    };

    /*
     * This function takes three 3D points and returns the cross product of the
     * vectors starting from the first point to the other two.
     */
    var crossProduct = function (point1, point2, point3) {
        var vector1 = vector(point1, point2);
        var vector2 = vector(point1, point3);
        return [ ((vector1[1] * vector2[2]) - (vector2[1] * vector1[2])),
            ((vector1[2] * vector2[0]) - (vector2[2] * vector1[0])),
            ((vector1[0] * vector2[1]) - (vector2[0] * vector1[1])) ];
    };

    /*
     * This function normalizes a 3D vector.
     */
    var normalize = function (vector) {
        var length = Math.sqrt((vector[0] * vector[0]) +
            (vector[1] * vector[1]) + (vector[2] * vector[2]));
        return [ vector[0] / length, vector[1] / length, vector[2] / length ];
    };

    /*
     * This function adds the given vertices to the overall gasket, then
     * adds their midpoints and finally divides them further if the desired
     * depth has not been reached.
     */
    var divideTetrahedron = function (gasket, normals, vertex1, vertex2, vertex3, vertex4, depth) {
        if (depth > 1) {
            // Grab the 6 midpoints among the 4 vertices.
            var midpoint1 = midpoint(vertex1, vertex2);
            var midpoint2 = midpoint(vertex2, vertex3);
            var midpoint3 = midpoint(vertex3, vertex1);
            var midpoint4 = midpoint(vertex4, vertex1);
            var midpoint5 = midpoint(vertex2, vertex4);
            var midpoint6 = midpoint(vertex4, vertex3);
            
            // Form the four subtetrahedrons and divide those up.
            divideTetrahedron(gasket, normals, vertex1, midpoint1, midpoint3, midpoint4, depth - 1);
            divideTetrahedron(gasket, normals, midpoint1, vertex2, midpoint2, midpoint5, depth - 1);
            divideTetrahedron(gasket, normals, midpoint3, midpoint2, vertex3, midpoint6, depth - 1);
            divideTetrahedron(gasket, normals, midpoint4, midpoint5, midpoint6, vertex4, depth - 1);
        } else {
            // Calculate the normal for each triangle.
            var normal1 = normalize(crossProduct(vertex1, vertex2, vertex3));
            var normal2 = normalize(crossProduct(vertex1, vertex3, vertex4));
            var normal3 = normalize(crossProduct(vertex1, vertex4, vertex2));
            var normal4 = normalize(crossProduct(vertex4, vertex3, vertex2));
            
            // Build the normal and vertex arrays.
            var normalCoordinatesToAdd = [].concat(normal1, normal1, normal1,
                normal2, normal2, normal2,
                normal3, normal3, normal3,
                normal4, normal4, normal4);
            var coordinatesToAdd = [].concat(vertex1, vertex2, vertex3,
                vertex1, vertex3, vertex4,
                vertex1, vertex4, vertex2,
                vertex4, vertex3, vertex2);
            
            // 12 three-element arrays equals 36 elements...
            for (var i = 0; i < 36; i += 1) {
                gasket.push(coordinatesToAdd[i]);
                normals.push(normalCoordinatesToAdd[i]);
            }
        }
    };
    
    var vertices = [];
    var normals = [];
    divideTetrahedron(vertices, normals,
        [ 0.0, 3.0 * Math.sqrt(6), 0.0 ],
        [ -2.0 * Math.sqrt(3), -Math.sqrt(6), -6.0],
        [ -2.0 * Math.sqrt(3), -Math.sqrt(6), 6.0 ],
        [ 4.0 * Math.sqrt(3), -Math.sqrt(6), 0.0 ],
        5);

    // Pass the calculated vertices and normals to WebGL.
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices),
        gl.STATIC_DRAW);
    
    var normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals),
        gl.STATIC_DRAW);
    
    // Set up shaders: we're inlining the source here for simplicity.  Shaders
    // are otherwise kept separate for easier maintenance.
    var vertexShaderSource =
        "#ifdef GL_ES\n" +
        "precision highp float;\n" +
        "#endif\n" +

        "attribute vec3 vertexPosition;" +
        "attribute vec3 normalVector;" +

        "uniform mat4 modelViewMatrix;" +
        "uniform mat4 projectionMatrix;" +
        "uniform mat4 normalMatrix;" +
        "uniform vec3 lightDirection;" +
        
        "varying float dotProduct;" +
        
        "void main(void) {" +
        "    gl_Position = projectionMatrix * modelViewMatrix * vec4(vertexPosition, 1.0);" +
        "    vec4 transformedNormal = normalMatrix * vec4(normalVector, 1.0);" +
        "    dotProduct = max(dot(transformedNormal.xyz, lightDirection), 0.0);" +
        "}";

    // The fragment shader performs the standard normalization calculation,
    // plus a little reduction based on the distance from the viewer.
    var fragmentShaderSource =
        "#ifdef GL_ES\n" +
        "precision highp float;\n" +
        "#endif\n" +

        "varying float dotProduct;" +
        
        "void main(void) {" +
        "    vec4 color = vec4(1.0, 0.0, 0.0, 1.0);" +
        "    float attenuation = 1.0 - gl_FragCoord.z;" +
        "    gl_FragColor = vec4(color.xyz * dotProduct * attenuation, color.a);" +
        "}";

    // We will do this twice, so we put it in a function.
    var setupShader = function (gl, shaderSource, shaderType) {
        var shader = gl.createShader(shaderType);
        gl.shaderSource(shader, shaderSource);
        gl.compileShader(shader);

        // Very cursory error-checking here...
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            alert("Shader problem: " + gl.getShaderInfoLog(shader));
            return null;
        } else {
            return shader;
        }
    };

    // OK, so now we REALLY set up the shaders.
    var shaderProgram;
    var vertexShader = setupShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
    var fragmentShader = setupShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) {
        // Another fatal issue.
        alert("Could not initialize shaders...sorry.");
        return;
    }

    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        // Another fatal issue.
        alert("Could not link shaders...sorry.");
        return;
    }

    // All done --- tell WebGL to use the shader program from now on.
    gl.useProgram(shaderProgram);

    // One-time initialization: light direction.
    gl.uniform3f(gl.getUniformLocation(shaderProgram, "lightDirection"), 0, 1, 1);

    // Hold on to the important variables within the shaders.
    var vertexPosition = gl.getAttribLocation(shaderProgram, "vertexPosition");
    gl.enableVertexAttribArray(vertexPosition);
    var normalVector = gl.getAttribLocation(shaderProgram, "normalVector");
    gl.enableVertexAttribArray(normalVector);

    var modelViewMatrixLocation = gl.getUniformLocation(shaderProgram, "modelViewMatrix"),
        projectionMatrixLocation = gl.getUniformLocation(shaderProgram, "projectionMatrix"),
        normalMatrixLocation = gl.getUniformLocation(shaderProgram, "normalMatrix");

    // Set up the requisite matrices and the values that determine them.
    var modelViewMatrix = new Matrix4x4(),
        projectionMatrix = new Matrix4x4(),
        viewerLocation = { x: 0.0, y: 0, z: 20.0 },
        rotationAroundX = 0.0, rotationAroundY = -90.0;
    
    /*
     * Displays the scene.
     */
    var drawScene = function () {
        // Clear the display.
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // Set up the viewing volume.
        projectionMatrix.loadIdentity();
        projectionMatrix.perspective(45, canvas.width / canvas.height, 11.0, 100.0);
        
        // Set up the model-view matrix.
        modelViewMatrix.loadIdentity();
        modelViewMatrix.translate(-viewerLocation.x, -viewerLocation.y, -viewerLocation.z);
        modelViewMatrix.rotate(rotationAroundX, 1.0, 0.0, 0.0);
        modelViewMatrix.rotate(rotationAroundY, 0.0, 1.0, 0.0);

        // Set up the normal matrix.
        var normalMatrix = modelViewMatrix.copy();
        normalMatrix.invert();
        normalMatrix.transpose();
        gl.uniformMatrix4fv(normalMatrixLocation, gl.FALSE, new Float32Array(normalMatrix.elements));
        
        // Display the gasket.
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.vertexAttribPointer(vertexPosition, 3, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
        gl.vertexAttribPointer(normalVector, 3, gl.FLOAT, false, 0, 0);
        gl.uniformMatrix4fv(modelViewMatrixLocation, gl.FALSE, new Float32Array(modelViewMatrix.elements));
        gl.uniformMatrix4fv(projectionMatrixLocation, gl.FALSE, new Float32Array(projectionMatrix.elements));
        gl.drawArrays(gl.TRIANGLES, 0, vertices.length / 3);

        // All done.
        gl.flush();
    };

    // Set up event handlers: we want a drag-to-rotate.
    var xDragStart, yDragStart,
        xRotationStart, yRotationStart;
    var cameraRotate = function (event) {
        rotationAroundX = xRotationStart + yDragStart - event.clientY;
        rotationAroundY = yRotationStart + xDragStart - event.clientX;
        drawScene();
    };
    
    canvas.onmousedown = function (event) {
        xDragStart = event.clientX;
        yDragStart = event.clientY;
        xRotationStart = rotationAroundX;
        yRotationStart = rotationAroundY;
        canvas.onmousemove = cameraRotate;
    };
    
    canvas.onmouseup = function (event) {
        canvas.onmousemove = null;
    };

    // ...and finally, do the initial display.
    drawScene();

};
