import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private authService:AuthService,private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    let email = String(localStorage.getItem("email"));
    let password = String(localStorage.getItem("password"));

    this.authService.isAuthenticated(email,password).pipe(map(x=>{
      if(x.status == true){
        return true;
      }
      else {
        this.router.navigateByUrl("/adminlogin");
        return false;
      }
    }))
    return true;
  }
}
