import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/logger.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {

  constructor(private logger: Logger) {
    logger.log('INFO', 'CREATING Comp1');
  }

  ngOnInit() {
  }

}
