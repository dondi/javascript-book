// Alerts a string with the initial characters of each array item.
var words = ["as", "far", "as", "i", "know"];
var result = "";
for (var i = 0; i < words.length; i += 1) {
    result += words[i].charAt(0).toUpperCase();
}
alert(result);
