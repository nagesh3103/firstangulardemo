export class Atm{
    cardNumber:string;
    pin:string;
    accountNumber:string;
    cvv:string;
    cardExpiry:Date;

    constructor(cardNumber:string,pin:string,accountNumber:string,cvv:string,cardExpiry:Date){
        this.cardNumber=cardNumber;
        this.pin=pin;
        this.accountNumber=accountNumber;
        this.cvv=cvv;
        this.cardExpiry=cardExpiry;
    }
}