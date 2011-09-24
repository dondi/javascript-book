var i = 0;
for (var property in document) {
    alert(property);
    i = i + 1;
    if (i > 4) {
        break;
    }
}
