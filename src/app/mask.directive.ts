import { Directive, ElementRef, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective {

@Input()
  appMask: string = '';
  maskData : string = '*********';
  originalData : string = '';

  constructor(private eleref:ElementRef) {
    console.log('from mask directive')
   }
@HostListener("mouseenter")
  mouseEnter(){
    console.log('Enter ')
    this.appMask=this.originalData;
    this.eleref.nativeElement.value=this.appMask;

  }
@HostListener("mouseleave")  
  mouseOut( ){
    this.originalData=this.appMask;
    this.appMask=this.maskData;
    console.log('Leave ' + this.originalData);
    console.log('enter into mouse leve method'+this.appMask);
    this.eleref.nativeElement.value=this.appMask;
  }
  @HostListener("mouseover")  
  mouseOver( ){

    console.log('Over ' );
  
  }  

}
