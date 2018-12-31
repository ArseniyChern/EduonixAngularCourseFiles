import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  makeRequest(url: string) {
    const headers = new HttpHeaders().set('aa', '123');
    const params = new HttpParams().set('a', '1').set('b', '2');
    return this.http.get(url, { params: params, headers: headers });
  }
}
