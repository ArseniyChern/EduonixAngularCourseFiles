import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  classes = ['Card'];
  data = 'Hello World';
  random(): boolean {
    return Math.random() > .5;
  }
}
