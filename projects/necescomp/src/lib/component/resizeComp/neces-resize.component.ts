import { Component, Output, Input ,HostListener, EventEmitter} from '@angular/core';
import { CommonFunc } from 'cmfcucai';

@Component({
  selector: 'neces-resize',
  templateUrl: './neces-resize.component.html',
  styleUrls: ['./neces-resize.component.css']
})
export class NecesResizeComponent {
	id;
	@Input('width') width : any;
	@Input('height') height : any;
	@Input('right') right = true;
	@Input('top') top = false;
	@Input('left') left = false;
	@Input('bot') bot = true;
	@Input('showSize') showSize = false;

	@Output('widthChange') widthChange = new EventEmitter();
	@Output('heightChange') heightChange = new EventEmitter();
	constructor() {
		this.id = 'vl'+CommonFunc.smallUUID();
	}

	$eventMouse : any;
	hidenForDrag : any;
	container : any = null;
	widthOld : any;
	heightOld : any;
	isResizeRight = false;
	isResizeBottom = false;

	resizeDownRight(e:any){
		this.isResizeRight = true;
		this.widthOld = this.width;
		this.$eventMouse = e;
		this.hidenForDrag =  e.currentTarget.parentElement.querySelector(".hidenForDrag");
		this.hidenForDrag.style.display = 'block';
		this.container = document.querySelector(`#${this.id}`);
		if(this.showSize)
			this.container.querySelector('.infoSize').style.display = 'block';
	}

	resizeDownBottom(e:any){
		this.isResizeBottom = true;
		this.heightOld = this.height;
		this.$eventMouse = e;
		this.hidenForDrag =  e.currentTarget.parentElement.querySelector(".hidenForDrag");
		this.hidenForDrag.style.display = 'block';
		this.container = document.querySelector(`#${this.id}`);
		if(this.showSize)
			this.container.querySelector('.infoSize').style.display = 'block';
	}

	@HostListener('mouseup', ['$event'])
	mouseup(event : any) {
		this.$eventMouse = null;
		this.isResizeRight = false;
    	this.isResizeBottom = false;
		if(this.hidenForDrag)
			this.hidenForDrag.style.display = '';
		if(this.showSize)
			this.container.querySelector('.infoSize').style.display = '';
	}

	@HostListener('mousemove', ['$event'])
	resizeMove(event: MouseEvent) {
		if(this.isResizeRight){
			let wid =  +this.widthOld +(event.x-(this.$eventMouse.x || this.$eventMouse.clientX))
			this.width = wid || 0;
			this.widthChange.emit(wid);
		}

		if(this.isResizeBottom){
			let hid =  +this.heightOld +(event.y-(this.$eventMouse.y || this.$eventMouse.clientY))
			this.height = hid;
			this.heightChange.emit(hid);
		}
	}
}
