import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpEndpointsService } from './http-endpoints.service';
import { ILoginResponse } from '../models/dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

 
  private isLoggedInSubject$ = new BehaviorSubject<boolean>(true);
  constructor(
    
    private http: HttpEndpointsService
  ) {}
  // endpoint: http://localhost:4200/login
  // type: post
  // {status: string, data: [{token: string, id_bloc: number, id_user: number}]}
  login(username: string, papssword: string) {  
    this.http.post<ILoginResponse>('api', {username, papssword}).subscribe(res => {
      const token = res.data[0].token;
      this.http.setToken(token);
      this.isLoggedInSubject$.next(true);
    });
  }

  isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject$.asObservable();
  }
  isLoggedInNow() {
    return this.isLoggedInSubject$.value;
  }
}
