$("#footer").html("");
$("#loading").show();

$.ajax({
    url: "../php/fortune.php",
    success: function (response) {
        $("#loading").hide();
        $("#footer").html(response);
    }
});
