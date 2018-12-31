import { Component } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberForm = this.formBuilder.group({
    operation: ['ADD'],
    numbers: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  performOperation() {

    const numbers = (this.numberForm.get('numbers') as FormArray).controls.
      map(control => isNaN(Number(control.value)) ? 0 : Number(control.value));

    let result = 0;

    if (this.numberForm.get('operation').value === 'ADD') {
      numbers.forEach(number => result += number);
      alert(result);
    } else {
      result = 1;
      numbers.forEach(number => result *= number);
      alert(result);
    }
  }

  addInput = () => (this.numberForm.get('numbers') as FormArray).controls.push(this.formBuilder.control(''));


  constructor(private formBuilder: FormBuilder) { }
}
