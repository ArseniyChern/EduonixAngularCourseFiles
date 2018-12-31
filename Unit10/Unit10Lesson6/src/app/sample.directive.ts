import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

  @Input('appSample') fontSize: number;

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('mousedown') mousedown() {
    this.elementRef.nativeElement.style.fontSize = this.fontSize + 'em';
  }

  @HostListener('mouseup') mouseup() {
    this.elementRef.nativeElement.style.fontSize = '1em';
  }

}
