import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpCilent: HttpClient) {}

  isAuthenticated(email:string,password:string) {
    let adminUser = {email:email,password:password};
    return this.httpCilent.post<any>('https://localhost:44387/api/auth/isAuthenticated',adminUser);
  }

}
