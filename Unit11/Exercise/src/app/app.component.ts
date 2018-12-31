import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view = false;
  toggle() {
    console.log(' view =', !this.view);
    this.view = !this.view;
  }
}
