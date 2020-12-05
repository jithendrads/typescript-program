var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
//creating instance of the the class
var myCustomer = new Customer("jithendra", "srinivas");
//myCustomer.firstName="jithendra";
//myCustomer.lastName="srinivas";
console.log(myCustomer.firstName + " " + myCustomer.lastName);
