$("#footer").html("");

$.ajax({
    url: "http://api.twitter.com/1/trends/weekly.json",
    success: function (response) {
        $("#footer").html(response);
    }
});
