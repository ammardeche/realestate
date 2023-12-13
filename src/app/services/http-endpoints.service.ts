import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpEndpointsService {
  private token?: string;
  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, { headers: this.getHeaders() });
  }
  post<T>(url: string, paylaod: any): Observable<T> {
    return this.http.post<T>(url, paylaod, { headers: this.getHeaders() });
  }
  put<T>(url: string, paylaod: any): Observable<T> {
    return this.http.put<T>(url, paylaod, { headers: this.getHeaders() });
  }
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url, { headers: this.getHeaders() });
  }
  setToken(token: string){
    this.token = token;
  }

  protected getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    if (this.token !== undefined && this.token !== '')
    headers = headers.set('Authorization', 'Bearer ' + this.token);
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('Accept', 'application/json');
    return headers;
  }
}
