var a = new Account("123", "Alice");
a.transfer(100);
alert(a.getBalance());    // Alerts 100
a.transfer(-20)
alert(a.getBalance());    // Alerts 80
a.transfer(-500);         // Throws "Transaction not accepted"
alert(a.getBalance());    // Alerts 80 (it didn't change)
alert(a.balance);         // Blank, because there's no such property
a.balance = 8;            // Uh-oh!! What is someone doing here?
alert(a.getBalance());    // Alerts 80, we're still safe.
alert(a.balance);         // Alerts 8. Hey! This is scary. Or is it?
