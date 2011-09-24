$("#footer").html("");

$.ajax({
    url: "../php/fortune.php",
    success: function (response) {
        $("#footer").html($("#footer").html() + response);
    }
});

$("#footer").html($("#footer").html() + "Your fortune is: ");
