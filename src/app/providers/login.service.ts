import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";



@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private authenticationState$ = new BehaviorSubject(this.isTokenValid());


  constructor(public jwtHelper: JwtHelperService) { }



  getIsAuthenticated(): Observable<boolean> {
    return this.authenticationState$.asObservable();
  }

  private isTokenValid(): boolean {
    return !this.jwtHelper.isTokenExpired(localStorage.getItem('Token'));
  }

  getToken() {
    return localStorage.getItem('Token');
  }
}
