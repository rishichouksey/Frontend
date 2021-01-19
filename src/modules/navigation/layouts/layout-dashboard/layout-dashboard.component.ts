import { SideNavDataService } from './../../services/side-nav-data.service';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    Input,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { sideNavItems, sideNavSections } from '@modules/navigation/data';
import { NavigationService } from '@modules/navigation/services';
import { Subscription } from 'rxjs';
import { SideNavItems, SideNavSection } from '@modules/navigation/models';

@Component({
    selector: 'sb-layout-dashboard',
    //changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './layout-dashboard.component.html',
    styleUrls: ['layout-dashboard.component.scss'],
})
export class LayoutDashboardComponent implements OnInit, OnDestroy {
    @Input() static = false;
    @Input() light = false;
    @HostBinding('class.sb-sidenav-toggled') sideNavHidden = false;
    subscription: Subscription = new Subscription();
    // sideNavItems = sideNavItems;
    // sideNavSections = sideNavSections;
    sideNavItems!: SideNavItems;
    sideNavSections!: SideNavSection[];
    sidenavStyle = 'sb-sidenav-dark';
    constructor(
        public navigationService: NavigationService,
        public sideNavDataService: SideNavDataService,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        this.sideNavSections = this.sideNavDataService.getSideNavSections();
        this.sideNavItems = this.sideNavDataService.getSideNavItems();
    }
    ngOnInit() {
        if (this.light) {
            this.sidenavStyle = 'sb-sidenav-light';
        }
        this.subscription.add(
            this.navigationService.sideNavVisible$().subscribe(isVisible => {
                this.sideNavHidden = !isVisible;
                this.changeDetectorRef.markForCheck();
            })
        );
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
