$("#footer").html("");

$.ajax({
    url: "http://go.technocage.com/javascript/cors",
    success: function (response) {
        $("#footer").html(response);
    }
});
