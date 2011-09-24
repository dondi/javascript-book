// BAD CODE: This is an inefficient way to add elements to a document.
var list = document.getElementById("days");
var days = "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",");
for (var i = 0, n = days.length; i < n; i += 1) {
    var item = document.createElement("li");
    item.innerHTML = days[i];
    list.appendChild(item);
}
