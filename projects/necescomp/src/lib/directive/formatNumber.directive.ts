import {
    Directive,
    ElementRef,

    Input,
    OnInit
} from '@angular/core';

@Directive({
    selector: '[fomatNumber]'
})
export class FomatNumberDirective implements OnInit {

    @Input() set fomatNumber(value : any) {
        this.decimal = value
    }

    decimal: number = 0;

    constructor(
        private elementRef: ElementRef<any>
    ) { }

    ngOnInit() {
        this.elementRef.nativeElement.children[0].children[0].addEventListener('keyup', (event : any) => {
            const value = event.target.value;
            if (this.decimal <= 0 && event.key === '.') {
                event.target.value = value.replace('.', '');
            } else if (!isNaN(Number(event.target.value.replace(/\,/g, '')))) {
                if (value.indexOf('.') !== -1 &&
                    value.slice((value.indexOf('.') + 1)).length > this.decimal) {
                    event.target.value = value.slice(0, value.length - 1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
                } else {
                    event.target.value = value.replace(/\,/g, '').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                }
            }
        });
    }
}
