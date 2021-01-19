import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '@common/services/common-local-storage.service';

@Injectable()
export class AppCommonGuard implements CanActivate {
    constructor(private localStorageService:LocalStorageService,
        private router: Router) { }
    canActivate(): boolean {
        if (!this.localStorageService.isAuthenticate()) {
            this.router.navigate(['/auth/login']);
            return false;
        }
        return true;
    }
}
