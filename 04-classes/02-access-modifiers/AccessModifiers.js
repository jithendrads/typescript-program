var AccessModifiers = /** @class */ (function () {
    function AccessModifiers(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(AccessModifiers.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this.firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccessModifiers.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return AccessModifiers;
}());
//creating instance of the the class
var customer1 = new AccessModifiers("jithendra", "srinivas");
//myCustomer.firstName="jithendra";
//myCustomer.lastName="srinivas";
console.log(customer1.firstName + " " + customer1.lastName);
