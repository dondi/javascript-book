/*
 * If Object.create does not exist in this JavaScript implementation,
 * define it!
 */
if (!Object.create) {
    Object.create = function (proto) {
        var F = function () {};
        F.prototype = proto;
        return new F();
    }
}
