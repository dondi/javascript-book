var account = (function () {
    var b = 0;
    return Object.create(Object.prototype, {
        balance: {
            get: function () {
                alert("Someone is requesting the balance");
                return b;
            },

            set: function (newValue) {
                if (newValue < 0) {
                    throw "Negative Balance";
                }
                b = newValue;
            },

            enumerable: true
        }
    });
}());
Object.preventExtensions(account);
