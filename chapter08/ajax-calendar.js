$("#footer").html("");
$.ajax({
    url: "../php/calendar.php",

    success: function (response) {
        $("#footer")
            .append("<table id='calendar' border='1'></table>");
        for (var i = 0; i < response.length; i += 1) {
            $("#calendar").append("<tr></tr>");

            var addCell = function (cellValue) {
                $("#calendar tr:last-child")
                    .append("<td>" + cellValue + "</td>");
            };
            
            addCell(response[i].month);
            addCell(response[i].day);
            addCell(response[i].description);
            addCell(response[i].movable ? "year-to-year" : "fixed");
        }
    }
});
