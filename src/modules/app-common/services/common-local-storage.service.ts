import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(
    private cookieService: CookieService,
    private jwtHelper: JwtHelperService) {
  }

  setUserId(userId: string) {
    this.cookieService.put('userId', userId);
  }

  getUserId() {
    return this.cookieService.get('userId');
  }

  setToken(jwtToken: string) {
    this.cookieService.put('jwtToken', jwtToken);
  }

  getToken() {
    return this.cookieService.get('jwtToken');
  }

  clearToken() {
    this.cookieService.remove('jwtToken'); 
  }

  isAuthenticate() {
    const token: string = this.cookieService.get('jwtToken');
    return !this.jwtHelper.isTokenExpired(token);
  }

}
