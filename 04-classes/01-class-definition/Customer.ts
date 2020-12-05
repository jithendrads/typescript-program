class Customer
{
    firstName:string;
    lastName:string;

    constructor(firstName:string,lastName:string)
    {
        this.firstName=firstName;
        this.lastName=lastName;
    }
}

//creating instance of the the class

let myCustomer=new Customer("jithendra","srinivas");
//myCustomer.firstName="jithendra";
//myCustomer.lastName="srinivas";
console.log(`${myCustomer.firstName} ${myCustomer.lastName}`);