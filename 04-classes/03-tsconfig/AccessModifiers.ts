class AccessModifiers
{
    private _firstName:string;
    private _lastName: string;
    

    constructor(firstName:string,lastName:string)
    {
        this._firstName=firstName;
        this._lastName=lastName;
    }

    public get firstName():string{
        return this._firstName;
    }

    public set firstName(firstName:string)
    {
        this.firstName=firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

}

//creating instance of the the class

let customer1=new AccessModifiers("jithendra","srinivas");
//myCustomer.firstName="jithendra";
//myCustomer.lastName="srinivas";
console.log(`${customer1.firstName} ${customer1.lastName}`);