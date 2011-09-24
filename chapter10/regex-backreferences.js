var regex = /(\S+)\s+\1/;
var text ="I think that that was okay";
alert(text.match(regex)[0]); // Alerts that that.
