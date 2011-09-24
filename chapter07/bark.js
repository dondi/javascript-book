var Dog = function (name) { this.name = name; }
Dog.prototype.bark = function () { alert(this.name + " says WOOF"); }
var star = new Dog("Bolt");
star.bark();
setTimeout(star.bark, 5000);
