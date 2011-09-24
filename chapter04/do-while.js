var numberOfTries = 0;
do {
    var input = prompt("Enter a 5-character string");
    numberOfTries += 1;
} while (input.length !== 5);
if (numberOfTries > 1) {
    alert("Took you " + numberOfTries + " tries to get this right");
}
