/*
 * This script draws nested squares whose sides have length 10, 20,
 * 30, 40, ... 300, in the center of the canvas whose document id is
 * "squares".
 */

var canvas = document.getElementById("squares");
var ctx = canvas.getContext("2d");
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
for (var side = 10; side <= 300; side += 10) {
    ctx.strokeRect(centerX - side / 2, centerY - side / 2, side, side);
}