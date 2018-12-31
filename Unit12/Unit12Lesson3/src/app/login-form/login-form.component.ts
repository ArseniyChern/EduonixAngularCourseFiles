import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('Bob'),
    password: new FormControl('123'),
  });

  constructor() {
    this.loginForm.valueChanges.subscribe((value) => {
      console.log(value.username);
    });
    this.loginForm.setValue({
      username: 'bill',
      password: 'password123'
    });
  }

  onSubmit() {
    console.log('Submitting form with values: ', this.loginForm.value);
  }

  ngOnInit() {
  }

}
