import { Component } from '@angular/core';
import { Account } from '../model/Account';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateaccountComponent {
  accountNumber:string='test';
  responseFlag:boolean=true;
  account=new Account("",'','',0,'');

  constructor(private accountService:AccountService,private router:Router){

  }
  createAccount(){
    console.log(JSON.stringify(this.account));
    this.accountService.createAccount(this.account).subscribe(
      data => {
        this.responseFlag = true;
        this.accountNumber=data.accountNumber;
        console.log(JSON.stringify(data))
        console.log(this.responseFlag)
        this.account=data;
      }
    );
  }
}
