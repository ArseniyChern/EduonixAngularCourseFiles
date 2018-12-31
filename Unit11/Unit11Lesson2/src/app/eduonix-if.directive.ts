import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appEduonixIf]'
})
export class EduonixIfDirective implements OnInit {

  @Input()
  show: boolean;

  ngOnInit() {
    console.log(this.show);
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    console.log(templateRef);
    console.log(viewContainerRef);
  }

}
