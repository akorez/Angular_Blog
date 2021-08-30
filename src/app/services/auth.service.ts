import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpCilent: HttpClient) {}

  isAuthenticated(email:string,password:string) {
    let adminUser = {email:email,password:password};
    return this.httpCilent.post<any>(`${environment.baseUrl}/auth/isAuthenticated`,adminUser);
  }

}
