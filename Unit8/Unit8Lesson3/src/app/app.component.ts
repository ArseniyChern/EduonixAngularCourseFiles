import { Component } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Unit8Lesson1';
  constructor(private backend: BackendService) { }

  perform() {
    this.backend.makeRequest('http://demo8142212.mockable.io/hello').subscribe(res => {
      console.log(res.msg);
    }, err => {
      console.log('ERROR');
      console.log(err);
    });
  }
}
