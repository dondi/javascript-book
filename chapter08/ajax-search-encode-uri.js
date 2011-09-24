var searchTerm = $("#searchField").attr("value");

$.ajax({
    url: encodeURI("http://www.google.com/search?q=" + searchTerm),
    success: function (response) {
        // Do what you want with the HTML that comes back.
    }
});
