import { Component } from '@angular/core';
import { AtmService } from '../atm.service';
import { AccountService } from '../account.service';
import { Account } from '../model/Account';
import { Atm } from '../model/Atm';


@Component({
  selector: 'app-createatm',
  templateUrl: './createatm.component.html',
  styleUrl: './createatm.component.css'
})
export class CreateatmComponent {
  account:Account={
    name:'',
    mobileNumber:'',
    pan:'',
    balance:0,
    accountNumber:''
  
  }
  atm:Atm={
    cardNumber:'',
    pin:'',
    cvv:'',
    cardExpiry:new Date(),
    accountNumber:''
  }

  constructor(private atmService:AtmService){}
    createAtm(){
      this.atmService.createAtm(this.account).subscribe(
        response=>{
          this.atm=response;
          console.log('ATM Created ',response);
        },
        error =>{
          console.log('Failed to create atm ',error);
        }
      )
    }
  

}
function Createatm() {
  throw new Error('Function not implemented.');
}
