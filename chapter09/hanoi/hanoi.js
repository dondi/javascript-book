/*
 * The hanoi function returns another function that is intended
 * for use as the onload event handler.
 */
var hanoi = function (height, towerCount, ringHeight) {
    return function () {
        // Represent the towers as arrays, then put those in an overall array.
        var towers = [];
        for (var i = 0; i < towerCount; i += 1) {
            towers.push([]);
        }
        
        // Create the rings and place them on the first tower.  Their widths
        // vary by increments of the given ringHeight (in pixels).
        var ringWidth = (height + 1) * ringHeight;
        for (i = 0; i < height; i += 1) {
            // Each ring is a div element, and we identify it with an ID.
            var ring = document.createElement("div");
            ring.id = height - i - 1;
            ring.style.width = ringWidth + "px";
            ring.style.height = ringHeight + "px";

            // For variety, we'll display odd and even rings differently.
            // The class attribute in HTML tags is accessed via the property
            // name className in JavaScript.
            ring.className = (i % 2) ? "oddring" : "ring";
            towers[0].push(ring);

            // The next ring is smaller.
            ringWidth -= ringHeight;
        }
        
        // Create the containing element.
        var puzzleboard = document.createElement("div");
        puzzleboard.id = "hanoi";

        // Calculate/set properties that depend on the ring height.
        var positionIncrement = (height + 2) * ringHeight;
        puzzleboard.style.height = (ringHeight * (height + 1)) + "px";
        puzzleboard.style.width = (positionIncrement * (towerCount + 1)) + "px";

        // Add the tower elements to the board.
        var towerWidth = ringHeight / 2;
        var towerLeft = positionIncrement;
        for (i = 0; i < towerCount; i += 1) {
            var tower = document.createElement("div");
            tower.className = "tower";
            tower.style.left = (towerLeft - (towerWidth / 2)) + "px";
            tower.style.width = towerWidth + "px";
            tower.style.height = puzzleboard.style.height;
            puzzleboard.appendChild(tower);
            towerLeft += positionIncrement;
        }
       
        // Add a base to the board.  The base is as high as the towers are wide.
        var base = document.createElement("div");
        base.className = "base";
        base.style.height = towerWidth + "px";
        puzzleboard.appendChild(base);
        
        // Add the rings to the board.
        for (i = 0; i < height; i += 1) {
            puzzleboard.appendChild(towers[0][i]);
        }
        
        // Define the function for positioning the rings---if actual Towers
        // of Hanoi mechanics were implemented, we'll end up doing this a lot.
        var positionRings = function () {
            towerLeft = positionIncrement;
            for (i = 0; i < towerCount; i += 1) {
                var bottom = towerWidth;
                for (j = 0; j < towers[i].length; j += 1) {
                    ring = towers[i][j];
                    ring.style.left =
                        // We use parseInt to chop off the units.
                        (towerLeft - (parseInt(ring.style.width) / 2)) + "px";
                    ring.style.bottom = bottom + "px";
                    bottom += ringHeight;
                }
                
                towerLeft += positionIncrement;
            }
        };
        
        // Actually call the displayRings function now.
        positionRings();
        
        // Add the entire element to the document.
        document.body.appendChild(puzzleboard);
    };
};
