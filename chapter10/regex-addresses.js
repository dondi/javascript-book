var usZipCode = /(\d{5})-(\d{4})/;
var address = "6233 Hollywood Bl, Los Angeles, CA 90028-5310 USA";
var result = address.match(usZipCode);
alert(result.length + " matches");      // Alerts 3 matches
alert(result[0]);                       // Alerts 90028-5310
alert(result[1]);                       // Alerts 90028
alert(result[2]);                       // Alerts 5310
