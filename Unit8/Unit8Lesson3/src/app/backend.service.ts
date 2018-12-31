import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  makeRequest(url: string): Observable<Response> {
    const headers = new HttpHeaders().set('aa', '123');
    const params = new HttpParams().set('a', '1').set('b', '2');
    return this.http.get<Response>(url, { params: params, headers: headers });
  }
}

interface Response {
  msg: string;
}
