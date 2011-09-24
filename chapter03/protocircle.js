var protoCircle = {x: 0, y: 0, radius: 1, color: "black"};
var c1 = Object.create(protoCircle);
c1.x = 4;
c1.color = "green";
// Note that c1.y === 0 and c1.radius === 1 (inherited properties)
