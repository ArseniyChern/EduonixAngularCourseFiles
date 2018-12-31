import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(username: string, password: string): Observable<boolean> {
    let success = false;
    users.forEach(user => {
      if (username === user.username && password === user.password) {
        success = true;
      }
    });
    return of(success);
  }
}

export const users = [
  { password: '123', username: 'bob' },
  { password: '124', username: 'bill' },
];
