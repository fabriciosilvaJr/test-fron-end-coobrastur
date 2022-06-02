import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private api: any = "https://reqres.in/api";
  
  private subjUsuario$: BehaviorSubject<any> = new BehaviorSubject(null);
  private subjLoggedIn$: BehaviorSubject<Boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: {EMAIL: string, SENHA: string}): Observable<any>{
    return this.http.post<any>(`${this.api}/login`, credentials)
   //  return this.http.post( this.api + 'auth',credentials)
    .pipe(
      tap((u:any)=>{
         localStorage.setItem('token',u.token);
         this.subjLoggedIn$.next(true);
         this.subjUsuario$.next(u);
         console.log(u);
      })
    )
  }
}
