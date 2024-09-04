import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserregisterService } from './userregister.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  rating: number = 3;

  onRatingUpdated(newRating: number) {
    this.rating = newRating;
    console.log('New Rating:', this.rating);
  }
  
  title = 'firstangulardemo';
  fullNameFromChild:string='';
  constructor(private router : Router,private userregisterService:UserregisterService){
    
    this.userregisterService.userNameBehaviourSubject.subscribe(
      data => {
        this.fullNameFromChild = data;
        console.log('from AppCOmponent subscribe');
      }
    )

  }
  register(){
    console.log("from reister");
    this.router.navigate(['register']);
  }
  forotpssword(){
    this.router.navigate(['psssword']);
  }
  
}
