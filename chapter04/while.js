var numberOfTries = 1;
while (prompt("Enter a 5-character string").length !== 5) {
    numberOfTries += 1;
}
if (numberOfTries > 1) {
    alert("Took you " + numberOfTries + " tries to get this right");
}
