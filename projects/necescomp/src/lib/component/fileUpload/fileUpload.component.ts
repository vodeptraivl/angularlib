import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

import {sha256} from 'js-sha256';


@Component({
  selector: 'neces-file',
  templateUrl: './fileUpload.component.html',
  styleUrls: ['./fileUpload.component.css']
})
export class NecesFileComponent {
  @Input("title") title : string = "";
  @Input("choseFileName") choseFileName : string = "chose file";
  @Output("fileChange") fileChange =  new EventEmitter();
  fileName = "";
  fileUpload : any;
  fileSize = "";
  classChange = "";
  
  @HostListener('drop', ['$event'])
	public onDrop(event: any): void {
    this.classChange = '';
		this._preventAndStop(event);
		var files = event.dataTransfer.files;
		if (files[0].size == 0) return;
    this.fileUpload = files[0];
		this.fileName = files[0].name;
		this.fileSize = this.bytepipe(files[0].size);
    this.fileChange.emit({name:this.fileName,size:this.fileSize,file:this.fileUpload});
	}

  protected _preventAndStop(event: any): any {
		event.preventDefault();
		event.stopPropagation();
	}

  bytepipe(size: number){

    let digitFloat = '^[0-9]{1,}[.]{1,1}[0-9]{1,}$';
    let testReg = new RegExp(digitFloat);
    if(size != null){
      let sizeStr = ""
      const val = size.toString()
      
      if (val.length > 9) {
        let gb = size/(1024*1024*1024);
        sizeStr = (testReg.test(gb+"") ? gb.toFixed(1) : gb) + " GB"
      } else if (val.length > 6) {
        let mb = size/(1024*1024);
        sizeStr = (testReg.test(mb+"") ? mb.toFixed(1) : mb) + " MB"
      } else if (val.length > 3) {
        let kb = size/(1024);
        sizeStr = (testReg.test(kb+"") ? kb.toFixed(1) : kb)  + " KB"
      }
      else {
        sizeStr = val.toString() + " Byte"
      }

      return sizeStr
    }
    return "";
		
	}

  public dragover(event: any) {
		event.preventDefault();
    this.classChange = 'borderred'
	}

  public changeDefault(event : any) {
		event.preventDefault();
    this.classChange = ''
  }

  onUpload(){}

  uploadFile(event : any) {
    this.fileName = event.target.files[0].name;
    this.fileSize = this.bytepipe(event.target.files[0].size);
    this.fileUpload = event.target.files[0];
    this.fileChange.emit({name:this.fileName,size:this.fileSize,file:this.fileUpload});
  }


}
