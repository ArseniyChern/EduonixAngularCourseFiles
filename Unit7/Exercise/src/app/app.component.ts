import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;
  password: string;

  loggedIn = false;

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(loggedIn => {
        if (loggedIn === false) { alert('wrong password'); }
        this.loggedIn = loggedIn;
      });
  }

}
