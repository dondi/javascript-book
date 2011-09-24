alert(isNaN(true));     // false, because true converts to 1
alert(isNaN(null));     // false, because null converts to 0
alert(isNaN("water"));  // true, and sensibly so
alert(isNaN("100"));    // false, because "100" converts to 100
