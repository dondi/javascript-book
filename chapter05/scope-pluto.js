var message = "Pluto is only a dwarf planet";
var warn = function () {
    var message = "You're about to see something controversial";
    alert(message);
};
warn();         // Alerts "You're about to see something controversial"
alert(message); // Alerts "Pluto is only a dwarf planet"
