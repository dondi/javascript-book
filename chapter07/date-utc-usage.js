var d = Date.UTC(2010, 9, 15, 20, 43, 8, 788);
alert(d);                         // 1287175388788
alert(new Date(d));               // Fri Oct 15 13:43:08 GMT-0700 (PST)
alert(new Date(d).toISOString()); // 2010-10-15T20:43:08.788Z
