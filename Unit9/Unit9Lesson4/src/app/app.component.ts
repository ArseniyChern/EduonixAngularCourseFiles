import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  email: string;
  password: string;

  onSubmit(formStatus) {
    if (formStatus === 'VALID') {
      console.log('Submitting Form:');
      console.log(this.name, this.email, this.password);
    } else {
      console.log('Can\'t submit form');
    }
  }
}
