import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCasual = false;

  names: string[] = [
    'Bill',
    'Sandra',
    'Jared',
  ];

  switchValue() {
    this.isCasual = !this.isCasual;
  }
}
