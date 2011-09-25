/*
 * Some base values.
 */
var maxLeft = 512;
var millisecondsPerFrame = 30;

/*
 * Helper function for managing button event handlers.
 */
var setupButton = function (button, label, onclickHandler) {
    button.value = label;
    button.onclick = onclickHandler;
    button.disabled = false;
};

var startConstantVelocityAnimation = function () {
    // Grab the desired velocity.
    var velocity = parseFloat(document.getElementById("cv-velocity").value);
    
    // Grab the object to animate, and initialize if necessary.
    var box = document.getElementById("cv-box");
    box.style.left = box.style.left || "0px";

    // Start animating.
    var intervalID = setInterval(function () {
        var newLeft = parseInt(box.style.left) + velocity;
        if ((newLeft < 0) || (newLeft > maxLeft)) {
            velocity = -velocity;
        } else {
            box.style.left = newLeft + "px";
        }
    }, millisecondsPerFrame);

    // Toggle the start button to stop animation.
    setupButton(document.getElementById("cv-button"), "Stop Animation", function () {
        clearInterval(intervalID);

        // Toggle the start button to stop animation.
        setupButton(document.getElementById("cv-button"),
            "Start Animation", startConstantVelocityAnimation);
    });
};

var startFadeOutAnimation = function () {
    // Grab the desired time to fade.
    var fadeTime = parseFloat(document.getElementById("fade-time").value);

    // Grab the object to animate, and initialize if necessary.
    var box = document.getElementById("fade-box");
    box.style.opacity = box.style.opacity || "1";

    // Start animating.
    var fadeRate = millisecondsPerFrame / (fadeTime * 1000);
    document.getElementById("fade-button").disabled = true;
    var intervalID = setInterval(function () {
        // Calculate the new values.
        var newOpacity = parseFloat(box.style.opacity) - fadeRate;
        if (newOpacity < 0) {
            // Upon reaching maximum transparency, stop the animation and toggle
            // the function of the fade button.
            newOpacity = 0;
            clearInterval(intervalID);
            setupButton(document.getElementById("fade-button"),
                "Fade In", startFadeInAnimation);
        }

        box.style.opacity = newOpacity;
    }, millisecondsPerFrame);
};

var startFadeInAnimation = function () {
    // Grab the desired time to fade.
    var fadeTime = parseFloat(document.getElementById("fade-time").value);

    // Grab the object to animate, and initialize if necessary.
    var box = document.getElementById("fade-box");
    box.style.opacity = box.style.opacity || "0";

    // Start animating.
    var fadeRate = millisecondsPerFrame / (fadeTime * 1000);
    document.getElementById("fade-button").disabled = true;
    var intervalID = setInterval(function () {
        // Calculate the new values.
        var newOpacity = parseFloat(box.style.opacity) + fadeRate;
        if (newOpacity > 1) {
            // Upon reaching maximum opacity, stop the animation and toggle
            // the function of the fade button.
            newOpacity = 1;
            clearInterval(intervalID);
            setupButton(document.getElementById("fade-button"),
                "Fade Out", startFadeOutAnimation);
        }

        box.style.opacity = newOpacity;
    }, millisecondsPerFrame);
};

var quadEaseIn = function (currentTime, start, distance, duration) {
    var percentComplete = currentTime / duration;
    return distance * percentComplete * percentComplete + start;
};

var quadEaseOut = function (currentTime, start, distance, duration) {
    var percentComplete = currentTime / duration;
    return -distance * percentComplete * (percentComplete - 2) + start;
};

var quadEaseInAndOut = function (currentTime, start, distance, duration) {
    var percentComplete = currentTime / (duration / 2);
    return (percentComplete < 1) ?
        (distance / 2) * percentComplete * percentComplete + start :
        (-distance / 2) * ((percentComplete - 1) * (percentComplete - 3) - 1) + start;
};

/*
 * Initial ease function is quadratic ease-in.
 */
var easingFunction = quadEaseIn;

var startEasedAnimation = function () {
    // Disable the animation button while doing this.
    document.getElementById("rv-button").disabled = true;
    
    // Grab the desired duration, and convert it into "frames."
    var duration = parseFloat(document.getElementById("rv-duration").value);
    duration = duration * 1000 / millisecondsPerFrame;
    
    // Determine the start and distance of the animation, based on where the
    // box currently is.
    var box = document.getElementById("rv-box");
    box.style.left = box.style.left || "0px";
    var start = (box.style.left === "0px") ? 0 : maxLeft;
    var distance = (start == 0) ? maxLeft : -maxLeft;

    // Event handlers on each radio button would have taken care of ensuring
    // that the right easing function has been chosen, so we can dive right in.
    var frame = 0;
    var intervalID = setInterval(function () {
        box.style.left = easingFunction(frame, start, distance, duration) + "px";
        frame += 1;
        
        // Check to see if we should stop.
        if (frame >= duration) {
            // "Sync up" the box's final position.
            box.style.left = ((distance < 0) ? 0 : maxLeft) + "px";
            clearInterval(intervalID);
            document.getElementById("rv-button").disabled = false;
        }
    }, millisecondsPerFrame);

};
