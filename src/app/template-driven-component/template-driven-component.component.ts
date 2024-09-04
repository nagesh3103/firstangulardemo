import { Component, Output } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import e from 'express';
import { UserregisterService } from '../userregister.service';
import { error } from 'console';
import { EventEmitter } from 'stream';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-driven-component',
  templateUrl: './template-driven-component.component.html',
  styleUrl: './template-driven-component.component.css'
})
export class TemplateDrivenComponentComponent {
  nameUsingChildOutput:string = '';
  childToParentUsingOutput($event: any){
    console.log("from childToParentUsingOutput method"+JSON.stringify($event));
    this.nameUsingChildOutput = $event;
  }
}