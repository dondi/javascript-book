/*
 * A complete tic-tac-toe widget.  Just include this script in a
 * browser page and enjoy.  A tic-tac-toe game will be included
 * as a child element of the element with id "tictactoe".  If the
 * page has no such element, it will just be added at the end of
 * the body.
 */
(function () {

    var squares = [];
    var EMPTY = "\xA0";
    var score;
    var moves;
    var turn = "X";

    /*
     * To determine a win condition, each square is "tagged" from left
     * to right, top to bottom, with successive powers of 2.  Each cell
     * thus represents an individual bit in a 9-bit string, and a
     * player's squares at any given time can be represented as a
     * unique 9-bit value. A winner can thus be easily determined by
     * checking whether the player's current 9 bits have covered any
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

    /*
     * Clears the score and move count, erases the board, and makes it
     * X's turn.
     */
    var startNewGame = function () {
        turn = "X";
        score = {"X": 0, "O": 0};
        moves = 0;
        for (var i = 0; i < squares.length; i += 1) {
            squares[i].firstChild.nodeValue = EMPTY;
        }
    };

    /*
     * Returns whether the given score is a winning score.
     */
    var win = function (score) {
        for (var i = 0; i < wins.length; i += 1) {
            if ((wins[i] & score) === wins[i]) {
                return true;
            }
        }
        return false;
    };

    /*
     * Sets the clicked-on square to the current player's mark,
     * then checks for a win or cats game.  Also changes the
     * current player.
     */
    var set = function () {
        if (this.firstChild.nodeValue !== EMPTY) return;
        this.firstChild.nodeValue = turn;
        moves += 1;
        score[turn] += this.indicator;
        if (win(score[turn])) {
            alert(turn + " wins!");
            startNewGame();
        } else if (moves === 9) {
            alert("Cat\u2019s game!");
            startNewGame();
        } else {
            turn = turn === "X" ? "O" : "X";
        }
    };

    /*
     * Creates and attaches the DOM elements for the board as an
     * HTML table, assigns the indicators for each cell, and starts
     * a new game.
     */
    var play = function () {
        var board = document.createElement("table");
        board.border = 1;
        var indicator = 1;
        for (var i = 0; i < 3; i += 1) {
            var row = document.createElement("tr");
            board.appendChild(row);
            for (var j = 0; j < 3; j += 1) {
                var cell = document.createElement("td");
                cell.width = cell.height = 50;
                cell.align = cell.valign = 'center';
                cell.indicator = indicator;
                cell.onclick = set;
                cell.appendChild(document.createTextNode(""));
                row.appendChild(cell);
                squares.push(cell);
                indicator += indicator;
            }
        }

        // Attach under tictactoe if present, otherwise to body.
        var parent = document.getElementById("tictactoe") || document.body;
        parent.appendChild(board);
        startNewGame();
    };

    /*
     * Add the play function to the (virtual) list of onload events.
     */
    if (typeof window.onload === "function") {
        var oldOnLoad = window.onload;
        window.onload = function () {oldOnLoad(); play();}
    } else {
        window.onload = play;
    }
}());
