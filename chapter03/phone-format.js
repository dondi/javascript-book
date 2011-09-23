var phone = "(800) 555-1212";
var area = phone.substring(1, 4);
var prefix = phone.substring(6, 9);
var suffix = phone.substring(10, 14);
alert(area + "." + prefix + "." + suffix); // 800.555.1212
