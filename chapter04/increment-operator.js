var x = 5;
x++;               // Now x is 6.
var y = x++;       // y gets 6, THEN x becomes 7.
var z = ++x;       // First x is bumped to 8, THEN z gets 8.
var w = ++y + z++; // y gets 7 first, so w gets 15 and z gets 9 after.
