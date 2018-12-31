import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OurComponentComponent } from './our-component/our-component.component';
import { Our2Component } from './our2/our2.component'

@NgModule({
  declarations: [
    AppComponent,
    OurComponentComponent,
    Our2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
