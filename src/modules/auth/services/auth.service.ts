import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AUTHENTICATION_URL,Register_DATA_URL } from '@app/app-config';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    authenticate(emailId: string,password:string) {
        let postData=new FormData(); 
        postData.append("emailId",emailId);     
        postData.append("password",password); 
        return this.http.post(AUTHENTICATION_URL, postData);
    }
    register(emailId:string,address:string,lastname:string,firstname:string,password:string){
        let postData=new FormData();
        postData.append("emailId",emailId);
        postData.append("address",address);
        postData.append("lastName",lastname);
        postData.append("firstName",firstname); 
        postData.append("password",password);
        return this.http.post(Register_DATA_URL,postData); 
    }
}
