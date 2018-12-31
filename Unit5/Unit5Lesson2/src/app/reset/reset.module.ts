import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurComponentComponent } from '../our-component/our-component.component';

@NgModule({
  declarations: [
    OurComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OurComponentComponent
  ]
})
export class ResetModule { }
