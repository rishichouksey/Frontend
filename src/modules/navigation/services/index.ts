import { SideNavDataService } from './side-nav-data.service';
import { NavigationService } from './navigation.service';
import { SideNavService } from './side-nav.service';

export const services = [NavigationService, SideNavService, SideNavDataService];

export * from './navigation.service';
export * from './side-nav.service';
export * from './side-nav-data.service';
