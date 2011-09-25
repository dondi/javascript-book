/*
 * A canvas-based tic-tac-toe game.
 *
 * Just include this script in a browser page.  It will add
 * the game to the end of the HTML document and you can
 * start playing.
 */
onload = function () {
    var turn = 'X';
    /*
     * To determine a win condition, each square is "tagged"
     * from left to right, top to bottom, with successive
     * powers of 2.  Each cell thus represents an individual
     * bit in a 9-bit string, and a player's squares at any
     * given time can be represented as a unique 9-bit value.
     * A winner can thus be easily determined by checking
     * whether the player's current 9 bits have covered any
     * of the eight "three-in-a-row" combinations.   
     * 
     *     273                 84
     *        \               /
     *          1 |   2 |   4  = 7
     *       -----+-----+-----
     *          8 |  16 |  32  = 56
     *       -----+-----+-----
     *         64 | 128 | 256  = 448
     *       =================
     *         73   146   292
     * 
     */
    var wins = [7, 56, 448, 73, 146, 292, 273, 84];
    var squares = [];
    var score;
    var moves;
    var board;
    var boardContext;

    /*
     * A major change in this version is the replacement of
     * nodeValue with a paint function.  In previous versions,
     * cell contents were drawn as text.  In this version, we
     * want complete painting freedom, so we instead use
     * functions based on the symbols '\xA0', 'X', and 'O'.
     */
    var gridThickness = 5; // Useful constant for measuring things out.
    var squarePainters = {
        '\xA0': function (x, y) {
            // Empty squares just clear the rectangle.  If desired, this can
            // be a little more elaborate, such as painting a backdrop.
            boardContext.clearRect(x + gridThickness, y + gridThickness,
                (board.width / 3) - (gridThickness << 1),
                (board.height / 3) - (gridThickness << 1));
        },

        'X': function (x, y) {
            // X's are dark blue diagonals with drop shadows.
            boardContext.save();
            boardContext.lineWidth = 5;
            boardContext.strokeStyle = "rgb(0, 0, 120)";
            boardContext.shadowOffsetX = 0;
            boardContext.shadowOffsetY = 1;
            boardContext.shadowBlur = 3;
            boardContext.shadowColor = "rgba(0, 0, 0, 0.75)";

            // We draw within a region whose margin is the grid thickness.
            var cellWidth = board.width / 3 - (gridThickness << 1);
            var cellHeight = board.height / 3 - (gridThickness << 1);
            var side = Math.min(cellWidth, cellHeight);
            var xCorner = side >> 2;
            var xSize = side * 3 >> 2;

            // The translate call helps to simplify the path coordinates.
            boardContext.translate(x, y);
            boardContext.beginPath();
            boardContext.moveTo(xCorner, xCorner);
            boardContext.lineTo(xCorner + xSize, xCorner + xSize);
            boardContext.moveTo(xCorner, xCorner + xSize);
            boardContext.lineTo(xCorner + xSize, xCorner);
            boardContext.stroke();

            boardContext.restore();
        },
        
        'O': function (x, y) {
            // O's are stroked arcs with a little accent in the middle.
            boardContext.save();
            boardContext.lineWidth = 4;
            boardContext.strokeStyle = "rgb(0, 120, 0)";
            boardContext.shadowOffsetX = 0;
            boardContext.shadowOffsetY = 1;
            boardContext.shadowBlur = 3;
            boardContext.shadowColor = "rgba(0, 0, 0, 0.75)";

            // We draw within a region whose margin is the grid thickness.
            var cellWidth = board.width / 3 - (gridThickness << 1);
            var cellHeight = board.height / 3 - (gridThickness << 1);
            var radius = Math.min(cellWidth, cellHeight) * 3 >> 3;

            // The translate call helps to simplify the path coordinates.
            boardContext.translate(x + gridThickness + (cellWidth >> 1),
                y + gridThickness + (cellHeight >> 1));
            boardContext.beginPath();
            boardContext.arc(0, 0, radius, 0, 2 * Math.PI, false);
            boardContext.stroke();

            // Put a little accent; no shadow on this one.
            boardContext.shadowColor = "rgba(0, 0, 0, 0)";
            var gradient = boardContext.createRadialGradient(0, 0, radius,
                -radius >> 2, -radius >> 2, gridThickness >> 1);
            gradient.addColorStop(0, "rgb(200, 100, 0)");
            gradient.addColorStop(1, "white");
            boardContext.fillStyle = gradient;
            boardContext.beginPath();
            boardContext.arc(0, 0, radius - gridThickness - 1, 0, 2 * Math.PI, false);
            boardContext.fill();
            
            boardContext.restore();
        }
    };

    /*
     * To accommodate different animations, we structure them as tweening
     * functions and assign a different tweening function to each symbol.
     */
    var tweeners = {
        'X': function (animationFraction, x, y) {
            var xCenter = board.width / 6;
            var yCenter = board.height / 6;
            boardContext.globalAlpha = animationFraction;
            boardContext.translate(x + xCenter, y + yCenter);
            boardContext.scale(animationFraction, animationFraction)
            boardContext.rotate(2 * Math.PI * animationFraction);
            boardContext.translate(-x - xCenter, -y - yCenter);
        },

        'O': function (animationFraction, x, y) {
            var xCenter = board.width / 6;
            var yCenter = board.height / 6;
            boardContext.globalAlpha = animationFraction;
            boardContext.translate(x + xCenter, y + yCenter);
            boardContext.scale(1, animationFraction);
            boardContext.translate(-x - xCenter, -y - yCenter);
        },
    };

    var startNewGame = function () {
        turn = 'X';
        score = {'X': 0, 'O': 0};
        moves = 0;
        for (var i = 0; i < squares.length; i++) {
            squares[i].paint = squarePainters['\xA0'];
        }
        
        drawTicTacToeBoard();
    };

    var win = function (score) {
        for (var i = 0; i < wins.length; i++) {
            if ((wins[i] & score) === wins[i]) {
                return true;
            }
        }
        return false;
    };

    /*
     * Returns the square that covers the given coordinates.
     */
    var getSquare = function (x, y) {
        var cellWidth = board.width / 3;
        var cellHeight = board.height / 3;
        for (var i = 0; i < squares.length; i++) {
            if ((x > squares[i].x) && (x < squares[i].x + cellWidth) &&
                (y > squares[i].y) && (y < squares[i].y + cellHeight)) {
                return squares[i];
            }
        }
        
        return null;
    };

    /*
     * Believe it or not, there is still some non-uniformity among web
     * browsers regarding how mouse events report coordinates.  This
     * function, adapted from http://diveintohtml5.org/canvas.html#halma,
     * provides a decent ``catch-all.''
     */
    var getCursorPosition = function (event) {
        var x, y;
        if (event.pageX || event.pageY) {
            x = event.pageX;
            y = event.pageY;
        } else {
            x = event.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
            y = event.clientY + document.body.scrollTop +
                document.documentElement.scrollTop;
        }

        x -= board.offsetLeft;
        y -= board.offsetTop;

        return { 'x': x, 'y': y };
    };

    /*
     * Animates the given square using the symbol of the current turn.
     */
    var animate = function (square) {
        // No clicks allowed while animating!
        board.onclick = null;
        
        // The animation is just an embellishment, so don't let it take
        // too long.
        var frameTotal = 15;
        var frameCount = 0;

        // Start the animation.
        var nextFrame = setInterval(function () {
            // The "empty square" painter serves as our eraser.
            squarePainters['\xA0'](square.x, square.y);

            // The current mark is drawn using some intermediate rendering
            // context state.
            boardContext.save();
            tweeners[turn](frameCount / frameTotal, square.x, square.y);
            squarePainters[turn](square.x, square.y);
            boardContext.restore();
            
            // Are we done?
            frameCount += 1;
            if (frameCount > frameTotal) {
                clearInterval(nextFrame);
                finishTurn(square);
            }
        }, 1000 / 30);
    };

    /*
     * Sets the clicked-on square to the current player's mark,
     * then checks for a win or cats game.  Also changes the
     * current player.
     */
    var set = function (event) {
        // Start with our cross-browser coordinate finder.
        var location = getCursorPosition(event);
        var square = getSquare(location.x, location.y);
        if (square) {
            if (square.paint !== squarePainters['\xA0']) {
                return;
            }
            
            // Animate the incoming mark.
            animate(square);
        }
    };
    
    /*
     * Formerly the latter part of set, this function finishes the
     * current turn.  It needs to be separated to force an animation
     * to conclude before this code is called.
     */
    var finishTurn = function (square) {
        // Update the state of the application.
        square.paint = squarePainters[turn];
        moves += 1;

        // Refresh the display.
        drawTicTacToeBoard();
        
        // Check for a win.
        score[turn] += square.indicator;
        if (win(score[turn])) {
            alert(turn + " wins!");
            startNewGame();
        } else if (moves === 9) {
            alert("Cat\u2019s game!");
            startNewGame();
        } else {
            turn = turn === 'X' ? 'O' : 'X';
        }
        
        // Restore the click handler.
        board.onclick = set;
    };

    /*
     * Draws a vertical grid line at x = 0.  Use transforms to position/orient
     * this line.
     */
    var drawGridLine = function () {
        boardContext.save();
        
        var gridGradient = boardContext.createLinearGradient(0, 0, boardContext.lineWidth - 1, 0);
        gridGradient.addColorStop(0.0, "brown");
        gridGradient.addColorStop(1.0, "black");
        boardContext.strokeStyle = gridGradient;

        boardContext.beginPath();
        boardContext.moveTo(0, boardContext.lineWidth);
        boardContext.lineTo(0, board.height - boardContext.lineWidth);
        boardContext.stroke();

        boardContext.restore();
    };

    /*
     * Draws the tic-tac-toe grid using the current boardContext.
     */
    var drawTicTacToeGrid = function () {
        boardContext.save();
        boardContext.shadowOffsetX = 1;
        boardContext.shadowOffsetY = 1;
        boardContext.shadowBlur = 3;
        boardContext.shadowColor = "rgba(0, 0, 0, 0.25)";
        boardContext.lineWidth = gridThickness;
        boardContext.lineCap = "round";

        boardContext.save();
        boardContext.translate(board.width / 3, 0);
        drawGridLine();
        boardContext.translate(board.width / 3, 0);
        drawGridLine();
        boardContext.restore();

        boardContext.save();
        boardContext.translate(board.width, board.height / 3);
        boardContext.rotate(Math.PI / 2);
        drawGridLine();
        boardContext.translate(board.height / 3, 0);
        drawGridLine();
        boardContext.restore();

        // This restore pairs up with the very first save.
        boardContext.restore();
    };
    
    /*
     * Paints the current contents of the game's squares.
     */
    var drawSquares = function () {
        for (var i = 0; i < squares.length; i += 1) {
            squares[i].paint(squares[i].x, squares[i].y);
        }
    };

    /*
     * Paints the state of the tic-tac-toe game using the current boardContext.
     */
    var drawTicTacToeBoard = function () {
        boardContext.clearRect(0, 0, board.width, board.height);
        drawTicTacToeGrid();
        drawSquares();
    };

    return function () {
        board = document.createElement('canvas');
        board.innerHTML = "This case study requires a web browser that supports the canvas tag.";
        board.width = 175;
        board.height = 175;
        board.onclick = set;
        
        boardContext = board.getContext("2d");

        var indicator = 1;
        var y = 0;
        for (var i = 0; i < 3; i++) {
            var x = 0;
            for (var j = 0; j < 3; j++) {
                squares.push({ x: x, y: y, indicator: indicator });
                indicator += indicator;
                x += board.width / 3;
            }
            y += board.height / 3;
        }
        document.body.appendChild(board);
        startNewGame();
    };
}();
