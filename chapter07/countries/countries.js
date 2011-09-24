/*
 * This is a first script using jQuery, illustrating the common
 * effect of showing "one child list at a time."
 */
$(document).ready(function () {

    // Hide all second-level lists with a roll-up effect
    $("ul ul").hide("slow");

    // Register listeners for clicking on top-level list items
    $(".country").click(function () {

        // First hide all second-level lists immediately
        $("ul ul").hide();

        // Then slowly expose the children of the clicked item
        $(this).next().show("slow");
    });
});
