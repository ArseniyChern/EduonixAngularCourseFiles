import { Component } from '@angular/core';
import { BackendService, User } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userId: string;
  user: User = new User();

  constructor(private backendService: BackendService) { }

  getUser() {
    this.backendService.getUser(this.userId).subscribe(res => {
      this.user = res;
    }, err => {
      this.user = new User();
      console.log('no user found');
    });
  }
}
