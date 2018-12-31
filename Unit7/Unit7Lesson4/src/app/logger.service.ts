import { Injectable } from '@angular/core';

@Injectable()
export class Logger {

  log(severity: string, message: string) {
    console.log(`${severity}: ${message}`);
  }
  constructor() { }
}
