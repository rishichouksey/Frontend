import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
import { AlertService } from '@common/services/alert.service';


@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit, OnDestroy {
    private subscription!: Subscription;
    //message$: BehaviorSubject<AlertMessage> = new BehaviorSubject<any>('');

    public message:string = '';
    public type:string = '';
    constructor(private alertService: AlertService) { 
        //this.message$ = new BehaviorSubject<any>('');
    }

    ngOnInit() {
        this.subscription = this.alertService.getMessage().subscribe(msg => { 
            if(msg!=null) {
                this.message = msg.message.trim();  
                this.type = msg.type.trim();  
            }  
            //this.message$.next(message);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    removeAlert() {
        //this.message$.next({type:'', message:''});
        this.message = '';
        this.type = '';
    }
}