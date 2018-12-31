import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  username: string;

  constructor(private router: Router) { }

  login() {
    this.router.navigate(['home', this.username]);
  }

  ngOnInit() {
  }

}
