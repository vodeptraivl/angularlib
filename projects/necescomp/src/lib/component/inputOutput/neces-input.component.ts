import { Component, Output, Input ,ViewChild, EventEmitter} from '@angular/core';
import { CommonFunc } from 'cmfcucai';

@Component({
  selector: 'neces-input',
  templateUrl: './neces-input.component.html',
  styleUrls: ['./neces-input.component.css']
})
export class NecesInputComponent {
	@ViewChild("selectInput") selectInput :HTMLElement | undefined
	inputText = "";
	@Input('data') data : any = [];
	@Input('maxLength') maxLength = "";
	@Input('disabled') disabled = false;
	@Input('optValue') optValue = null;
	@Input('optText') optText = null;
	id = "";
	indexSelect = -1;
	@Output('valueChange') valueChange = new EventEmitter();
	@Output('blurChangeValue') blurChangeValue = new EventEmitter();
	@Output('enterValue') enterValue = new EventEmitter();
	@Output('removeValue') removeValue = new EventEmitter();
	constructor() {
		this.id = CommonFunc.UUIDV4();
	}

	ngOnChanges(changes : any){
		this.inputText = "";
	} 
	removeBackSpace(){
		if(this.disabled){
			return;
		}
		
		if(this.inputText == ""){
			if(this.indexSelect == -1){
				if(this.data.length > 0){
					this.indexSelect = this.data.length-1;
				}
			}else{
				this.removeData();
			}
		}
		
	}

	removeData(){
		this.removeItem(this.indexSelect);
		this.indexSelect -=1;
	}

	pushValues($event : any){
		if(this.inputText != ""){
			if(this.optValue != null && this.optText != null){
				let newD : any = {};
				newD[this.optValue] = null;
				newD[this.optText] = this.inputText;
				newD['enterCode'] = true;
				this.data.push(newD);
			}else{
				this.data.push(this.inputText);
			}
			this.inputText = "";
			this.indexSelect =-1;
			this.valueChange.emit(this.data);
			this.enterValue.emit(this.inputText);
		}
	}

	blurEvent($event : any){
		if(this.inputText != ''){
			this.blurChangeValue.emit(this.inputText);
		}
		else{
			this.blurChangeValue.emit(null);
		}
	}

	removeItem(index : any){
		this.data.splice(index,1);
		this.valueChange.emit(this.data);
		this.removeValue.emit(this.data);
	}

}
