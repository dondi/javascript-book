var circle = {
    radius: 5,
    area: function () {return Math.PI * this.radius * this.radius;},
    circumference: function () {return 2 * Math.PI * this.radius;}
};
alert(circle.area());           // Alerts 78.53981633974483
circle.radius = 1.5;
alert(circle.circumference());  // Alerts 9.42477796076938
