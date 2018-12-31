import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Input('appColor') color;

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = this.color === undefined || this.color === '' ? 'red' : this.color;
  }

  @HostListener('click') onclick() {
    this.elementRef.nativeElement.style.backgroundColor = this.color === undefined || this.color === '' ? 'red' : this.color;
  }
}
