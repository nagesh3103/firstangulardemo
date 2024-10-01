import { Component } from '@angular/core';
import { LoansearchService } from '../loansearch.service';

@Component({
  selector: 'app-loansearch',
  templateUrl: './loansearch.component.html',
  styleUrl: './loansearch.component.css'
})
export class LoansearchComponent {
  accountnumber:string='';
  constructor(private loansearchservice:LoansearchService){}
  searchAccount(){
    console.log('input account number '+this.accountnumber)
    this.loansearchservice.searchAccount(this.accountnumber).subscribe(data =>{
      console.log(JSON.stringify(data))
    });
  }

}
