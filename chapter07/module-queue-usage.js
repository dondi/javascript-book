queue.add("Moe");
queue.add("Larry");
alert(queue.remove());  // Alerts "Moe"
queue.add("Shemp");
queue.add("Curly");
alert(queue.remove());  // Alerts "Larry"
alert(queue.remove());  // Alerts "Shemp"
