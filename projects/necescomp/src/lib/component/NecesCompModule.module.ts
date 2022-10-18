import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NecesFileComponent } from './fileUpload/fileUpload.component';
import { NecesInputComponent } from './inputOutput/neces-input.component';
import { NecesResizeComponent } from './resizeComp/neces-resize.component';



@NgModule({
  declarations: [
    NecesInputComponent,
    NecesResizeComponent,
    NecesFileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    NecesInputComponent,
    NecesResizeComponent,
    NecesFileComponent
  ]
})
export class NecesCompModule { }
