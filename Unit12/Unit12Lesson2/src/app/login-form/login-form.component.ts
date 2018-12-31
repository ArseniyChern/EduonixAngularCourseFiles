import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username = new FormControl('Bob');

  constructor() {
    this.username.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.username.setValue('Bill');
  }

  ngOnInit() {
  }

}
