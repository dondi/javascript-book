// Find the index position of the first even number in array.
for (var i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
        alert("Even number found at position " + i);
        break;
    }
}
