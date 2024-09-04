import { Component } from '@angular/core';
import { atm } from '../model/Atm';

@Component({
  selector: 'app-createatm',
  templateUrl: './createatm.component.html',
  styleUrl: './createatm.component.css'
})
export class CreateatmComponent {
  atm=new atm("","","","","");
  createAtm(){
    
  }
}