// Legal but not recommended.
if (count === 0) break;

// Also legal but not recommended.
if (count === 0)
    break;

// Preferred.
if (count === 0) {
    break;
}

// Legal, though silly.
{{{{alert("Hello");}}}}

// Error-prone upon code modification...
for (var i = 0; i < 10; i += 1)
    alert(i + " squared is " + (i * i));

// ...for example:
for (var i = 0; i < 10; i += 1)
    var square = i * i;
    alert(i + " squared is " + square);
