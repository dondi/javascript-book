var total = 0;
for (var p = scores; p != null; p = p.next) {
    total += p.score;
}
alert(total);
