var dog = Object.create(Object.prototype, {
    name: { value: "Spike", configurable: true, writable: true },
    breed: { writable: false, enumerable: true, value: "terrier" }
});
Object.defineProperty(dog, "birthday",
    { enumerable: true, value: "2003-05-19" }
);
alert(JSON.stringify(Object.getOwnPropertyDescriptor(dog, "breed")));
