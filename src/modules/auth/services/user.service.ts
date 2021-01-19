import { User } from '@modules/auth/models';
import { LocalStorageService } from './../../app-common/services/common-local-storage.service';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const userSubject: ReplaySubject<User> = new ReplaySubject(1);

@Injectable()
export class UserService {

    constructor(public http: HttpClient,
        private localStorageServce: LocalStorageService) {
        if (this.user == null) {
            let user: User = <User>{ userId: this.localStorageServce.getUserId() };
            this.user = user;
        }
    }

    set user(user: User) {
        userSubject.next(user);
    }

    get user$(): Observable<User> {
        return userSubject.asObservable();
    }


}
