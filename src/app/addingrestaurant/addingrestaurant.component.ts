import { Component } from '@angular/core';
import { Restaurant } from '../model/Restaurant';
import { Address } from '../model/Address';
import { Rating } from '../model/Rating';


@Component({
  selector: 'app-addingrestaurant',
  templateUrl: './addingrestaurant.component.html',
  styleUrl: './addingrestaurant.component.css'
})
export class AddingrestaurantComponent {

restaurant=new Restaurant('',new Address('','','','',''),new Rating(0,''));


AddRestaurant(){}
}
