window.onload = function () {
    var acceleration = { r: 0, g: 0, b: 0 },
        accelerationIncludingGravity = { r: 0, g: 0, b: 0 },
        rotationRate = { r: 0, g: 0, b: 0 },
        orientation = { r: 0, g: 0, b: 0 },
        
        // Helper functions.
        possiblyClamp = function (value) {
            return (value < 0) ? 0 : ((value > 255) ? 255 : value);
        },

        getRGBString = function (color) {
            return "rgb(" + Math.floor(color.r) + "," +
                Math.floor(color.g) + "," + Math.floor(color.b) + ")";
        },
        
        // The acceleration y values affects their swatchs' red+green (thus
        // yellow) and blue components: red+green for positive y, blue for
        // negative y.  Null accelerations yield a medium gray.
        updateAccelerationColor = function (color, acceleration, scale) {
            color.r = acceleration ? ((acceleration.y > 0) ?
                possiblyClamp(acceleration.y * scale) : 0) : 127;
            color.g = color.r;
            color.b = acceleration ? ((acceleration.y < 0) ?
                possiblyClamp(-acceleration.y * scale) : 0) : 127;
        };

    window.ondevicemotion = function (event) {
        updateAccelerationColor(acceleration, event.acceleration, 128);
        updateAccelerationColor(accelerationIncludingGravity,
            event.accelerationIncludingGravity, 32);

        // The rotation rate gamma axis affects its swatch's red and green
        // components: red for positive gamma, green for negative gamma.
        rotationRate.r = event.rotationRate ? ((event.rotationRate.gamma > 0) ?
            possiblyClamp(event.rotationRate.gamma) : 0) : 127;
        rotationRate.g = event.rotationRate ? ((event.rotationRate.gamma < 0) ?
            possiblyClamp(-event.rotationRate.gamma) : 0) : 127;
        rotationRate.b = event.rotationRate ? 0 : 127;
        
        // Display the new colors.
        document.getElementById("acceleration-swatch").style
            .backgroundColor = getRGBString(acceleration);
        document.getElementById("acceleration-gravity-swatch").style
            .backgroundColor = getRGBString(accelerationIncludingGravity);
        document.getElementById("rot-rate-swatch").style
            .backgroundColor = getRGBString(rotationRate);
    };

    window.ondeviceorientation = function (event) {
        // The alpha axis affects the red and green components in an
        // inverse manner.  No need for null checks here, since this
        // function won't even be called if device orientation is not
        // supported or available.
        var scaledAlpha = Math.abs(event.alpha * 256 / 180);
        orientation.r = possiblyClamp(scaledAlpha);
        orientation.g = possiblyClamp(256 - scaledAlpha);
        
        // Display the new color.
        document.getElementById("orientation-swatch").style
            .backgroundColor = getRGBString(orientation);
    };
};
