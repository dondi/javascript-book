// Define the function - this does not run the body
var cube = function (x) {
    return x * x * x;
};

// Make three calls, running the body three times
alert(cube(-2));
alert(cube(10));
alert("There are " + (cubeOf(3) - 1) + " cubes in a Rubik's Cube");
