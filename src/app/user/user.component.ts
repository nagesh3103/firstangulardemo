import { Component, Output,EventEmitter } from '@angular/core';
import { UserregisterService } from '../userregister.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name:string = 'Angular Demo';
  companyName:String='';
  subject = new Subject<string>();
  
  @Output()
  userNameEmitter : EventEmitter<string> = new EventEmitter();
  constructor(private userRegisterService: UserregisterService,private router:Router){
    this.subject.subscribe( data => {
      console.log('from subject subscriber data value'+ data);
    });
    console.log('from constructor templateDrivenComponent');
  }
  password:string='';
  userDetails = {
    name: '',
    email: '',
    address: '',
    mobile: '',
    age: '',
    gender: ''
  };
  successMessage:string='';

  register(form: any): void {

    this.userRegisterService.emitName(this.userDetails.name);
    this.userNameEmitter.emit(this.userDetails.name);

    var syncResponse = this.userRegisterService.learnSyncMethod(this.userDetails);

    console.log(' from syncResponse' + JSON.stringify(syncResponse));

    this.userRegisterService.learnObservable().subscribe(

      mthodOutput =>{
        console.log('from custom learn observable subscription');
        this.companyName = mthodOutput;
      }
    );
   
      var response = this.userRegisterService.registerUser(this.userDetails);

      response.subscribe(response =>{
        console.log(" from subscribe of observable " + JSON.stringify(response));
      }, error => {
        console.log(" from subscribe of observable error  ");
      });
      console.log("registration is in progress"+ JSON.stringify(this.userDetails)+"response"+response)
      }

      mouseEnter(){
        console.log('from template driven class');
      }
}

