import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginService } from './login.service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private service:LoginService) { 
    const token = localStorage.getItem('token');
    this._isLoggedIn$.next(!!token);

    if (localStorage.length == 0){
      this._isLoggedIn$.next(false);
    }
  }

  check(email:string,password:string){
    return this.service.check(email,password).pipe(
      tap((response:any)=>{
        localStorage.setItem('token',response.remember_token);
        this._isLoggedIn$.next(true);
      })
    )
  }
}
