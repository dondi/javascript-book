var picks = {
    Alice: [4, 52, 9, 1, 30, 2],
    Boris: [14, 9, 3, 6, 22, 40],
    Chi: [51, 53, 48, 21, 17, 8],
    Dinh: [1, 2, 3, 4, 5, 6],
};

var found = false;
Search: for (var person in picks) {
    var choices = picks[person];
    for (var i = 0; i < choices.length; i += 1) {
        if (choices[i] === 53) {
            found = true;
            break Search;
        }
    }
}
alert(found);
