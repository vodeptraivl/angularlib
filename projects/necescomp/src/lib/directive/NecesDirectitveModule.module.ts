import { NgModule } from '@angular/core';
import { ClickOutSizeDirective } from './clickOutsite.directive';
import { FomatNumberDirective } from './formatNumber.directive';



@NgModule({
  declarations: [
    ClickOutSizeDirective,
    FomatNumberDirective
  ],
  imports: [
  ],
  exports: [
    ClickOutSizeDirective,
    FomatNumberDirective
  ]
})
export class NecesDirectitveModule { }
