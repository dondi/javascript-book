/*
 * Enables or disables the category drop-down menu.
 */
var setCategoryEnabled = function (enabled) {
    // Recall that "!" in JavaScript means "not."
    document.getElementById("category").disabled = !enabled;
};

/*
 * Enables or disables the category drop-down menu based
 * on whether or not the "Check me" box is checked.
 */
var handleCheckClick = function () {
    setCategoryEnabled(this.checked);
};

// Sync up the drop-down and the checkbox.
setCategoryEnabled(document.getElementById("check").checked);

// Set the event handler.
document.getElementById("check").onclick = handleCheckClick;