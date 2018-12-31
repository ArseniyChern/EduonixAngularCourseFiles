import { Component } from '@angular/core';
import { Logger } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Logger]
})
export class AppComponent {
  title = 'Unit7Lesson1';
  constructor(private logger: Logger) {
    logger.getStatus().subscribe(status => console.log(status));
    logger.log('INFO', 'Creating App Component');
    logger.getStatus().subscribe(status => console.log(status));
  }
}
