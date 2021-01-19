import { Router } from '@angular/router';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs/internal/Observer';
import { LocalStorageService } from './common-local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    public localStorageService: LocalStorageService, 
    private router: Router) {
  }


  private requestMiddleware(req: HttpRequest<any>) {
    const token = this.localStorageService.getToken(); 
    let reqNew = req;
    if (!(req.url.toString().endsWith('authenticate') || req.url.toString().endsWith('forgotPassword') || req.url.toString().endsWith('changePassword'))) {
      reqNew = req.clone({
        setHeaders: {
          //'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        withCredentials: true
      });
    }
    //console.log(JSON.stringify(reqNew));
    return reqNew;
  }

  private interceptHandler(e: HttpEvent<any>): Observable<HttpEvent<any>> {
    if ((e as any).status === 401 && this.localStorageService.isAuthenticate()) {
      console.log(e);
      // this.authService.logout();
    }
    if ((e as any).status === 404 && this.localStorageService.isAuthenticate()) {
      this.router.navigate(['/']);
    } 
    // else {
    //   this.router.navigate(['/auth/login']);
    // }
    return throwError(e);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.requestMiddleware(req)).pipe(
      catchError<any, any>(this.interceptHandler.bind(this)),
    );
  }
}
