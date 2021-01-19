import { AppCommonModule } from './../modules/app-common/app-common.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieModule } from 'ngx-cookie';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from '@common/services/auth.interceptor';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
export function tokenGetter() {
    return localStorage.getItem('jwtToken');
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        OwlDateTimeModule, 
        OwlNativeDateTimeModule,
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AppCommonModule,
        LoadingBarHttpClientModule,
        LoadingBarRouterModule,
        LoadingBarModule,
        MatFormFieldModule, 
        CookieModule.forChild(),
        JwtModule.forRoot({
            config: {
                tokenGetter
            }
        }),

    ],
    providers: [JwtHelperService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
    bootstrap: [AppComponent],
})
export class AppModule { }
