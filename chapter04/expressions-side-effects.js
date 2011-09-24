var x = 2;       // Declares x, initializing it to 2.
alert(x);        // Alerts 2.
alert(10 * x);   // Alerts 20.
var y;           // Declares y, without an explicit initial value.
alert(y);        // Alerts undefined.
y = x * 5;       // Assigns 10 to y, because x is still 2.
var z = y;       // Declares z, initializing it to 10.
y = "dog";       // Assigns "dog" to y, overwriting the old value 10.
alert(y + z);    // Alerts "dog10", because z is still 10.
