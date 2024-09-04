export class Account{
    name:string;
    mobileNumber:string;
    pan:string;
    balance:number;
    accountNumber:string

    constructor(name:string,mobileNumber:string,pan:string,balance:number,accountNumber:string){
        this.name=name;
        this.accountNumber=accountNumber;
        this.balance=balance;
        this.pan=pan;
        this.mobileNumber=mobileNumber;
    }
}