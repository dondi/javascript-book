var list = document.getElementById("days");
var days = "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(",");
var fragment = document.createDocumentFragment();
for (var i = 0, n = days.length; i < n; i += 1) {
    var item = document.createElement("li");
    item.innerHTML = days[i];
    fragment.appendChild(item);
}
list.appendChild(fragment);
