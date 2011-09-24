window.ondevicemotion = function (event) {
    document.getElementById("acceleration-x")
        .innerHTML = event.acceleration ?
            event.acceleration.x : "not reported";
    document.getElementById("acceleration-y")
        .innerHTML = event.acceleration ?
            event.acceleration.y : "not reported";
    document.getElementById("acceleration-z")
        .innerHTML = event.acceleration ?
            event.acceleration.z : "not reported";

    document.getElementById("acceleration-gravity-x")
        .innerHTML = event.accelerationIncludingGravity ?
            event.accelerationIncludingGravity.x : "not reported";
    document.getElementById("acceleration-gravity-y")
        .innerHTML = event.accelerationIncludingGravity ?
            event.accelerationIncludingGravity.y : "not reported";
    document.getElementById("acceleration-gravity-z")
        .innerHTML = event.accelerationIncludingGravity ?
            event.accelerationIncludingGravity.z : "not reported";

    document.getElementById("interval").innerHTML = event.interval;

    document.getElementById("rot-rate-alpha")
        .innerHTML = event.rotationRate ?
            event.rotationRate.alpha : "not reported";
    document.getElementById("rot-rate-beta")
        .innerHTML = event.rotationRate ?
            event.rotationRate.beta : "not reported";
    document.getElementById("rot-rate-gamma")
        .innerHTML = event.rotationRate ?
            event.rotationRate.gamma : "not reported";
};

window.ondeviceorientation = function (event) {
    document.getElementById("orientation-alpha")
        .innerHTML = event.alpha;
    document.getElementById("orientation-beta")
        .innerHTML = event.beta;
    document.getElementById("orientation-gamma")
        .innerHTML = event.gamma;
};
