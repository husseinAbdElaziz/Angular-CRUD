import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { Element } from '@angular/compiler';

@Directive({
  selector: '[appInputForm]'
})
export class InputFormDirective {

// tslint:disable-next-line: no-input-rename
  @Input('format') format: any;

  constructor( private ref: ElementRef) { }
  @HostListener ('focus')
  onfocus() {
    console.log('focus');
  }
  @HostListener('blur')
  onblur() {
// tslint:disable-next-line: prefer-const
    let getValue: string = this.ref.nativeElement.value;
    if (this.format === 'upperCase') {
      this.ref.nativeElement.value = getValue.toUpperCase();
    } else {
      this.ref.nativeElement.value = getValue.toLowerCase();
    }

  }

}
