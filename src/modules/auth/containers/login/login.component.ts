import { Response } from './../../../app-common/models/app-common.model';
import { Router } from '@angular/router';
import { User } from '@modules/auth/models';
import { AuthService } from './../../services/auth.service';
import { UserService } from '@modules/auth/services';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '@common/services/alert.service';
import { LocalStorageService } from '@common/services/common-local-storage.service';

@Component({
    selector: 'sb-login',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    userId: string = '';
    password: string = '';
    loginForm: FormGroup;
    submitted: boolean = false;
    constructor(
        private userService: UserService,
        private alertService: AlertService,
        private fb: FormBuilder,
        private router: Router,
        private localStorageService: LocalStorageService,
        private authService: AuthService) {
        this.loginForm = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3), Validators.email]], 
            password: ['', Validators.required]
        });
    }
    ngOnInit() {
        this.localStorageService.clearToken();
    }

    get f() { return this.loginForm.controls; }

    authenticateUser() {
        this.submitted = true; 
        if (!this.loginForm.valid) {
            return;
        }
        this.authService.authenticate(this.loginForm.value.username,this.loginForm.value.password).subscribe(data => {
            let response: Response = <Response>data;
            if (response.status == 'SUCCESS') {
                this.router.navigate(['/dashboard']);
                this.localStorageService.setToken(response.token);
                this.localStorageService.setUserId(this.f.username.value); 
                let user: User = <User>{};
                user.userId = this.f.username.value;
                user.name = this.f.username.value;
                this.userService.user = user;
            } else {
                this.alertService.error(response.message);
            }
        }, error => {
            this.alertService.error(error.error ? error.error.message : JSON.stringify(error));
        });
    }
}
