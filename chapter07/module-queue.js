var queue = function () {
    var data = [];
    return {
        add: function (x) {data.push(x);},
        remove: function () {return data.shift();}
    };
}();
