import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { BackendService } from '../../backend-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  loginForm = this._fb.group({
    username: [''],
    password: ['']
  });

  displayError = false;
  displayLoading = false;

  submit() {
    this.displayLoading = true;
    this._backend.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(result => {
      this.displayLoading = false;
      this._router.navigateByUrl('home');
      localStorage.setItem('login-token', result.token);
    }, err => {
      this.displayLoading = false;
      this.displayError = true;
    });
  }

  constructor(private _fb: FormBuilder, private _backend: BackendService, private _router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('login-token') != null) {
      this._router.navigateByUrl('/home');
    }
    this.loginForm.valueChanges.subscribe(value => {
      this.displayError = false;
    });
  }

}
