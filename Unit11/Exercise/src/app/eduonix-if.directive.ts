import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appEduonixIf]'
})
export class EduonixIfDirective {

  @Input('appEduonixIf') set show(willShow: boolean) {
    if (!willShow === true) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    console.log(templateRef);
    console.log(viewContainerRef);
  }

}
