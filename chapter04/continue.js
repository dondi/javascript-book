// Computes the sum of all positive values in array.
var sum = 0;
for (var i = 0; i < array.length; i += 1) {
    if (array[i] <= 0) {
        continue;               // Skip nonpositives.
    }
    sum += array[i];            // Accumulate positives.
}
alert("Sum of positives is " + sum);
