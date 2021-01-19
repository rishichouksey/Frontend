import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '@common/services/alert.service';
import { AuthService } from '@modules/auth/services';
import { Response } from './../../../app-common/models/app-common.model';
@Component({
    selector: 'sb-register',
    templateUrl: './register.component.html',
    styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted: boolean = false;
    constructor(private alertService: AlertService,
        private fb: FormBuilder,
        private router: Router,
        private authService: AuthService) {
        this.registerForm = this.fb.group({
            emailId: ['', [Validators.required, Validators.email]],
            address: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            firstName: ['', [Validators.required]],
            id: ['', [Validators.nullValidator]],
            password: ['', Validators.required]
        });
    }
    ngOnInit() { }
    get f() { return this.registerForm.controls; }

    registerUser() {
        this.submitted = true; 
        if (this.registerForm.invalid) {
            return;
        }
        this.authService.register(this.f.emailId.value,this.f.address.value,this.f.lastName.value,this.f.firstName.value,this.f.password.value).subscribe(data => {
            let response: Response = <Response>data;
            if (response.status == 'SUCCESS') {
                this.alertService.success(response.message);  
                this.router.navigate(['/auth/login']);
            } else {
                this.alertService.error(response.message);
            }
        }, error => {
            this.alertService.error(error.error ? error.error.message : JSON.stringify(error));
        });
    }
}
