var Geometry = {
    circleArea: function (radius) {
        return Math.PI * radius * radius;
    },
    circleCircumference: function (radius) {
        return 2 * Math.PI * radius;
    },
    sphereSurfaceArea: function (radius) {
        return 4 * Math.PI * radius * radius;
    },
    boxVolume: function (length, width, depth) {
        return length * width * depth;
    }
};
