var a = [];           // a is an array of length 0.
var b = [3, 5];       // b has length 2.
b.push(2);            // Now b is [3, 5, 2].
b.unshift(7);         // Now b is [7, 3, 5, 2].
a.push(3, 10, 5);     // Now a is [3, 10, 5].
a.reverse();          // Now a is [5, 10, 3].
alert(a.pop());       // Alerts 3 and changes a to [5, 10].
alert(a.shift());     // Alerts 5 and changes a to [10].
b.push(a[0], 1);      // b is now [7, 3, 5, 2, 10, 1].
b.sort();             // b is now [1, 10, 2, 3, 5, 7].
