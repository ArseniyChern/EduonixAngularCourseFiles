import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Logger } from '../logger.service';
import { Com2Component } from './com2/com2.component';

@NgModule({
  declarations: [Com2Component],
  imports: [
    CommonModule
  ],
  exports: [Com2Component]
})
export class Mod2Module { }
