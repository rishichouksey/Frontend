/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SideNavDataService } from './side-nav-data.service';

describe('Service: SideNavData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideNavDataService]
    });
  });

  it('should ...', inject([SideNavDataService], (service: SideNavDataService) => {
    expect(service).toBeTruthy();
  }));
});
