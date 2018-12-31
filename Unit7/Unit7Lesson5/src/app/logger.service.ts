import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class Logger {

  status = false;
  log(severity: string, message: string) {
    console.log(`${severity}: ${message}`);
    this.status = true;
  }

  getStatus() {
    return of(this.status);
  }
  constructor() { }
}
