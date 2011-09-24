alert(account.balance);   // Calls get, (magically) alerts 0.
account.balance = 50;     // Calls set
alert(account.balance);   // Calls get, alerts 50.
account.balance = -20;    // Calls set, throws
alert(account.balance);   // Calls get, (still) alerts 50.
account.b = 500;          // Has no effect
alert(account.balance);   // Still alerts 50.
