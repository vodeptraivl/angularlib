import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NecesInputComponent } from './inputOutput/neces-input.component';



@NgModule({
  declarations: [
    NecesInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    NecesInputComponent
  ]
})
export class NecesCompModule { }
