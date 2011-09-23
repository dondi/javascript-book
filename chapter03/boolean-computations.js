var x = 42;
var y = -1;
var bothPositive = x > 0 && y > 0;
var atLeastOneNegative = x < 0 || y < 0;
var exactlyOneNegative = x < 0 !== y < 0;
var atLeastOneNonPositive = !bothPositive;
