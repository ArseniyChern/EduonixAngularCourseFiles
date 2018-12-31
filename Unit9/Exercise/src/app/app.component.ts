import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedUser: User = new User();
  newUser: User = new User();

  submit(formStatus) {
    console.log(this.newUser);
    if (formStatus === 'VALID') {
      this.displayedUser.email = this.newUser.email;
      this.displayedUser.password = this.newUser.password;
      this.displayedUser.name = this.newUser.name;
      this.displayedUser.phoneNumber = this.newUser.phoneNumber;
    } else {
      alert('Fix Errors Before Submitting a New User');
    }
  }

}

class User {
  name: string;
  email: string;
  password: string;
  phoneNumber: number;
}
