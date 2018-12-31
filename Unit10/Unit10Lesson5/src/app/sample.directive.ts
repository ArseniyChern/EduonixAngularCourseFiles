import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('mousedown') mousedown() {
    this.elementRef.nativeElement.style.fontSize = '2em';
  }

  @HostListener('mouseup') mouseup() {
    this.elementRef.nativeElement.style.fontSize = '1em';
  }

}
