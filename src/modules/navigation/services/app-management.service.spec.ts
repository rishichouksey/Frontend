/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppManagementService } from './app-management.service';

describe('Service: AppManagement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppManagementService]
    });
  });

  it('should ...', inject([AppManagementService], (service: AppManagementService) => {
    expect(service).toBeTruthy();
  }));
});
