import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`http://demo8142212.mockable.io/users/${id}`);
  }

}

export class User {
  name: string;
  id: number;
  yob: number;
  email: string;
}
