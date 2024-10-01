import { Address } from "./Address";

export class Account{
    name:string;
    mobileNumber:string;
    pan:string;
    balance:number;
    accountNumber:string;
    address:Address;

    constructor(name:string,mobileNumber:string,pan:string,balance:number,accountNumber:string,address:Address){
        this.name=name;
        this.accountNumber=accountNumber;
        this.balance=balance;
        this.pan=pan;
        this.mobileNumber=mobileNumber;
        this.address=address;

    }
}