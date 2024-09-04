import { Component } from '@angular/core';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-forgotpssword',
  templateUrl: './forgotpssword.component.html',
  styleUrl: './forgotpssword.component.css'
})
export class ForgotpsswordComponent {
  password:string='';
  fullNameFromChild:string='';
  constructor(private userRegisterService:UserregisterService){
    console.log('from constructor ForgotpsswordComponent ');

    this.userRegisterService.userNameBehaviourSubject.subscribe(
      data => {
        this.fullNameFromChild = data;
        console.log('from ForgotpsswordComponent subscribe');
      }
    );
  }
  userDetails = {
    name: '',
    email: '',
    address: '',
    mobile: '',
    age: null,
    gender: ''
  };

  mouseEnter(){
    console.log('from template driven class');
  }
}
