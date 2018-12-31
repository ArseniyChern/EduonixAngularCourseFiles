import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResetModule } from './reset/reset.module';
import { OurComponentComponent } from './our-component/our-component.component';
import { OurApplicationRoutingModuleModule } from './our-application-routing-module/our-application-routing-module.module'


@NgModule({
  declarations: [
    AppComponent,
    OurComponentComponent
  ],
  imports: [
    ResetModule,
    BrowserModule,
    OurApplicationRoutingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
