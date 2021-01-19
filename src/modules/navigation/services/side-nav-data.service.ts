import { Injectable } from '@angular/core';
import { LocalStorageService } from '@common/services/common-local-storage.service';
import { Router } from '@angular/router';
import { SideNavSection, SideNavItems, SideNavItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SideNavDataService {

  constructor(
    public localStorageService: LocalStorageService) {
  }

  getSideNavSections(): SideNavSection[] {
    return [
      {
        text: 'Home',
        items: ['dashboard'],
      },
    ];
  }

  getSideNavItems(): SideNavItems {
    return {
      dashboard: {
        icon: 'chart-bar',
        text: 'Dashboards',
        link: '/dashboard',
      },
    };
  }
}
