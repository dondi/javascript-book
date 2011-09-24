/*
 * Creates an account object, with initial balance 0.
 */
var Account = function (id, owner) {
    this.id = id;
    this.owner = owner;
    this.balance = 0;
}

/*
 * Deposits or withdraws from an account, depending on whether the
 * amount is positive or negative, respectively.  If the transfer
 * would cause the balance to go negative, it is not applied and
 * an exception is thrown.
 */
Account.prototype.transfer = function (amount) {
    // A positive value is a deposit; a negative is a withdrawal.
    var tentativeBalance = this.balance + amount;
    if (tentativeBalance < 0) {
        throw "Transaction not accepted.";
    }
    this.balance = tentativeBalance;
}
