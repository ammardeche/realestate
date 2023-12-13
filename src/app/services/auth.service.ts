import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpEndpointsService } from './http-endpoints.service';
import { ILoginResponse } from '../models/dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject$ = new BehaviorSubject<boolean>(true);
  private key: string = 'ckey';
  constructor(private http: HttpEndpointsService, private router: Router) {
    const localToken = localStorage.getItem(this.key);
    if (localToken) this.http.setToken(localToken);
  }
  // endpoint: http://localhost:4200/login
  // type: post
  // {status: string, data: [{token: string, id_bloc: number, id_user: number}]}
  login(email: string, password: string) {
    this.http
      .post<ILoginResponse>('http://localhost:3000/api/user/login', {
        email,
        password,
      })
      .subscribe((res) => {
        console.log('res' + res.data[0].id_user);
        const token = res.data[0].token;
        this.http.setToken(token);
        localStorage.setItem(this.key, token);
        this.isLoggedInSubject$.next(true);
        this.router.navigate(['/post']);
      });
  }

  isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject$.asObservable();
  }
  isLoggedInNow() {
    return this.isLoggedInSubject$.value;
  }
}
