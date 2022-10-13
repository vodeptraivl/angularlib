
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutSizeDirective {

  constructor(private _elementRef: ElementRef) { }

  @Output('clickOutside') clickOutside: EventEmitter<any> = new EventEmitter();
  @Input('classNonCheck') classNonCheck : any;
  @HostListener('document:click', ['$event.target']) onMouseEnter(targetElement: any) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    targetElement.className
    let count = 0;
    if(!!this.classNonCheck && this.classNonCheck.length > 0){
        let classnonCheck = this.classNonCheck.split(",");
        let classname = targetElement.className;
        for(let i = 0; i< classnonCheck.length ; i++){
            if(classname.indexOf(classnonCheck[i]) > -1){
                count++;
            }
        }
        if(count == 0 && !clickedInside){
            this.clickOutside.emit(null);
        }
    }else{
       if (!clickedInside) {
            this.clickOutside.emit(null);
        } 
    }
    
  }
}