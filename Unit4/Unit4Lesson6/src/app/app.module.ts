import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResetModule } from './reset/reset.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ResetModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
