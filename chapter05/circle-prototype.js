/*
 * A prototypical circle, designed to be the prototype for all circles
 * created with the Circle function below.
 */
var protoCircle = {
    radius: 1,
    area: function () {return Math.PI * this.radius * this.radius;},
    circumference: function () {return 2 * Math.PI * this.radius;}
};

/*
 * Creates a circle with a given radius.
 */
var Circle = function (r) {
    var c = Object.create(protoCircle);
    c.radius = r;
    return c;
};
