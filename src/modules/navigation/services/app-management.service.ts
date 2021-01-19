import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '@common/services/common-local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppManagementService {

  constructor(private http: HttpClient,
    private storageService: LocalStorageService) { }


  
}
