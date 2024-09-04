export class atm{
    cardNumber:string;
    pin:string;
    accountNumber:string;
    cvv:string;
    cardExpiry:string;

    constructor(cardNumber:string,pin:string,accountNumber:string,cvv:string,cardExpiry:string){
        this.cardNumber=cardNumber;
        this.pin=pin;
        this.accountNumber=accountNumber;
        this.cvv=cvv;
        this.cardExpiry=cardExpiry;
    }
}