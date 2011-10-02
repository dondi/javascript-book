/*
 * An event-based tic-tac-toe game.
 *
 * This script starts with the variables and functions (state
 * and behavior) that are needed by the game.  The last statement
 * sets an onload event handler, which in turn sets up the event
 * handlers for the tic-tac-toe board.  The HTML source is
 * expected to set the board up for us.
 */

var squares = [];
var EMPTY = '\xA0'
var score;
var moves;
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

var startNewGame = function () {
    turn = 'X';
    score = {'X': 0, 'O': 0};
    moves = 0;
    for (var i = 0; i < squares.length; i += 1) {
        squares[i].firstChild.nodeValue = EMPTY;
    }
};

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
 * then checks for a win or cat's game.  Also changes the
 * current player.
 */
var set = function () {
    if (this.firstChild.nodeValue !== EMPTY) {
        return;
    }
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
        turn = turn === 'X' ? 'O' : 'X';
    }
};

onload = function () {
    // Note how we *really* rely on IDs being assigned properly.
    var indicator = 1;
    for (var i = 0; i < 3; i += 1) {
        for (var j = 0; j < 3; j += 1) {
            var cell = document.getElementById("cell" + i + j);
            cell.indicator = indicator;
            cell.onclick = set;
            cell.appendChild(document.createTextNode(''));
            squares.push(cell);
            indicator += indicator;
        }
    }
    startNewGame();
};
