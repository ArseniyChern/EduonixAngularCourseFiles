import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private userStore = [
    { username: 'bob', password: '123' },
    { username: 'bill', password: '123' },
    { username: 'jack', password: '123' },
    { username: 'john', password: '123' },
  ];

  constructor(private _http: HttpClient) { }

  login(username: string, password: string) {
    const body = { password, username };
    for (let i = 0; i < this.userStore.length; i++) {
      if (this.userStore[i].username === username && this.userStore[i].password === password) {
        return this._http.post<{ token: string }>('http://demo8783980.mockable.io/login', body);
      }
    }
    return this._http.post<{ token: string }>('http://demo8783980.mockable.io/loginError', body);
  }

}
