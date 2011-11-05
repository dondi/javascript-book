var Account = function (id, owner) {
    this.id = id;
    this.owner = owner;
    var balance = 0;

    this.transfer = function (amount) {
        // A positive value is a deposit; a negative is a withdrawal.
        var tentativeBalance = balance + amount;
        if (tentativeBalance < 0) {
            throw "Transaction not accepted";
        }
        balance = tentativeBalance;
    };

    this.getBalance = function () {
        return balance;
    };
};
