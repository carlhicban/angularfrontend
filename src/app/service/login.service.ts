import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url = 'http://127.0.0.1:8000/api/login';
  constructor(private http:HttpClient) { }

  check(email: string, password: string) {
    return this.http.post<ILogin>(this._url,{ email, password });
  }
}
