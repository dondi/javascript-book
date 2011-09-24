var a = [9, 3, 2, 1, 3]; // a[0] is 9, a.length is 5, etc.
a[20] = 6;               // a[5] through a[19] now undefined.
alert(a.length);         // Alerts 21.
a.length = 50;           // a[21] through a[49] all undefined.
a.length = 3;            // a is now [9, 3, 2].
