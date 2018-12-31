import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: [''],
    password: [''],
    identifications: this.formBuilder.array([
      this.formBuilder.group({
        idName: [''],
        idNumber: ['']
      }),
      this.formBuilder.group({
        idName: [''],
        idNumber: ['']
      }),
      this.formBuilder.group({
        idName: [''],
        idNumber: ['']
      })
    ])
  });

  constructor(private formBuilder: FormBuilder) {
    this.loginForm.valueChanges.subscribe((value) => {
      console.log(value.username);
    });

    this.loginForm.patchValue({
      username: 'Bill',
      identification: {
        idName: 'Bill',
      }
    });
  }

  onSubmit() {
    console.log('Submitting form with values: ', this.loginForm.value);
  }

  ngOnInit() {
  }

}
