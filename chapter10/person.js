var Person = function (name, mother, father) {
    this.name = name;
    this.mother = mother;
    this.father = father;
}

/*
 * Returns true if this is an ancestor of p and false otherwise.
 * Precondition: The family tree must be well-formed, containing
 * only person objects or nulls, and with no cycles.
 */
var Person.prototype.isAncestorOf = function (p) {
    return p != null &&
        (this === p.mother ||
        this === p.father ||
        this.isAncestorOf(p.mother) ||
        this.isAncestorOf(p.father));
}

var xia = new Person("Xia", null, null);
var maria = new Person("Maria", null, null);
var ariana = new Person("Ariana", Maria, null);
var anders = new Person("Anders", xia, null);
var gretchen = new Person("Gretchen", null, null);
var hillary = new Person("Hillary", gretchen, anders);
var hiroku = new Person("Hiroku", ariana, null);
var hayk = new Person("Hayk", null, hiroku);
var carlos = new Person("Carlos", hillary, hayk);

alert(ariana.isAncestorOf(hillary));
