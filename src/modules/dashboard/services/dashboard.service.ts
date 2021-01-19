import { LocalStorageService } from '../../app-common/services/common-local-storage.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GET_Employee_DATA_URL,Save_Employee_DATA_URL,Delete_Employee_DATA_URL } from '@app/app-config';

@Injectable()
export class DashboardService {
    constructor(private http: HttpClient,
        private storageService: LocalStorageService) { }

              
    getEmployeeData() {
        let postData = new FormData();
        let managerId=this.storageService.getUserId();  
        postData.append('managerId',managerId+'');   
        return this.http.post(GET_Employee_DATA_URL, postData);
    }
    saveData(empData:any) {
        return this.http.post(Save_Employee_DATA_URL, empData);
    }
    deleteData(id:number){
        let postData = new FormData();
        postData.append('id',id+'');   
        return this.http.post(Delete_Employee_DATA_URL, postData);
    }
}
