// Sort by age ascending
alert(team.sort(function (p, q) { return p.age - q.age; }));

// Sort by salary descending
alert(team.sort(function (p, q) { return q.salary - p.salary; }));

// Sort by name ascending
alert(team.sort(function (p, q) {
    return p.name < q.name ? -1 : p.name > q.name ? 1 : 0
