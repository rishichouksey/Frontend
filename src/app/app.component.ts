import { AlertService } from './../modules/app-common/services/alert.service';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {  Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'DEMO';
    constructor(public router: Router,
        private alertService: AlertService,
        private loadingBar : LoadingBarService,
        private titleService: Title) {
     
        this.titleService.setTitle(this.title);
       
    }

   
}
