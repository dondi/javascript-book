document.getElementById("header").innerHTML =
    "A Simple Dynamic HTML Adder";

document.getElementById("introduction").innerHTML =
    "This page adds two numbers.";

document.getElementById("instructions").innerHTML =
    "Type a number into each of the fields below, " +
    "paste the addition script into the text area, " +
    "then click the <i>Add</i> button.";

document.getElementById("input1Label").innerHTML = "Addend 1";
document.getElementById("input2Label").innerHTML = "Addend 2";
document.getElementById("status").innerHTML = "";
document.getElementById("runButton").value = "Add 'Em";

// Make everything else invisible.
var idsToHide = [ "check", "checkLabel", "row2", "row3" ];
for (var index = 0; index < idsToHide.length; index += 1) {
    document.getElementById(idsToHide[index]).style.display = "none";
}

// A final reminder that we need the separate adder script
// pasted in.
alert("Don't forget to paste/type in the adder script!");