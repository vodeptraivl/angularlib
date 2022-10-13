## INTRO

neces is necessary
comp is component and more

## This can be

i dont know

## Install

```shell
$ npm install necesang@latest
```

## Directive

```typescript
@NgModule({
  ...
  imports: [
    NecesDirectitveModule
  ]
  ...
})

click outside =>
        EXP : <div clickOutside [classNonCheck]="a,b,c,d" (clickOutside)="clickOutSide()"></div>
        [classNonCheck] => dont emit when click into element has class 'a' or 'b' or 'c' or 'd' .
        (clickOutside) => will calback when click outside the element .

```
## Neces Component

```typescript
@NgModule({
  ...
  imports: [
    NecesCompModule
  ]
  ...
})

input =>
        EXP : <neces-input ></neces-input>
        @Input('data') data : any = [] => data binding
        @Input('maxLength') maxLength = "";
        @Input('disabled') disabled = false;
        @Input('optValue') optValue = null;
        @Input('optText') optText = null;
```
update late


## Sometime can help you, maybe