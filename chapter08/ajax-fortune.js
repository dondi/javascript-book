$.ajax({
    url: "../php/fortune.php",
    success: function (response) {
        $("#footer").html(response);
        
        // Compare the above jQuery call to:
        // document.getElementById("footer").innerHTML = response;
    }
});
