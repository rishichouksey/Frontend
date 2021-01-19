import { AlertService } from './../../../app-common/services/alert.service';
import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeData, Response } from '@common/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '@common/services/common-local-storage.service';

@Component({
  selector: 'sb-dashboard-tables',
  templateUrl: './dashboard-tables.component.html',
  styleUrls: ['dashboard-tables.component.scss'],
})
export class DashboardTablesComponent implements OnInit {
  employeeData: EmployeeData[] = [];
  isNewRecord: boolean = false;
  employeeForm: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder,
    private storageService: LocalStorageService,
    private dashboardService: DashboardService,
    private alertService: AlertService) {
    this.employeeForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      id: ['-1', [Validators.nullValidator]],
      dob: ['-1', [Validators.required]], 
      mobile: ['', [Validators.required,Validators.minLength(10)]],
      city: ['', [Validators.nullValidator]],
    }); 
  }
  ngOnInit() {
    this.getEmployeeData();
  }
  get f() {
    return this.employeeForm.controls;
  }
  addNewEmployeeData() {
    this.isNewRecord = true;
    this.employeeForm.reset();
    this.employeeForm.patchValue({ 
      id:'-1',
      dob:'-1'   
    })  
  }
  getEmployeeData() {
    this.dashboardService.getEmployeeData().subscribe((data) => {
      let gResponse: Response = <Response>data;
      if (gResponse.status == 'SUCCESS') {
        let res: any = gResponse.response;
        if (res) {
          this.employeeData = res;
        }
      } else {
        this.alertService.error(gResponse.message);
      }
    }, error => {
      this.alertService.error(error);
    });
  }
  deleteData(id: number) { 
    this.dashboardService.deleteData(id).subscribe((data) => {
      let gResponse: Response = <Response>data;
      if (gResponse.status == 'SUCCESS') {
        this.alertService.error(gResponse.message);
        this.getEmployeeData();
      } else {
        this.alertService.error(gResponse.message);
      }
    }, error => {
      this.alertService.error(error);
    });
  }
  saveData() {
    this.submitted = true;
    if (this.employeeForm.invalid) {
      return;
    }
    let postData = new FormData();
    postData.append('managerId', this.storageService.getUserId());
    postData.append('firstName', this.employeeForm.value.firstName);
    postData.append('lastName', this.employeeForm.value.lastName);
    postData.append('city', this.employeeForm.value.city);
    postData.append('mobile', this.employeeForm.value.mobile);
    postData.append('dob', new Date(this.employeeForm.value.dob).getTime()+''); 
    postData.append('emailId', this.employeeForm.value.emailId); 
    postData.append('address', this.employeeForm.value.address); 
    postData.append('id', this.employeeForm.value.id);
    this.dashboardService.saveData(postData).subscribe((data: any) => {
      let gResponse: Response = <Response>data;
      if (gResponse.status == 'SUCCESS') {
        this.submitted = false;
        this.alertService.success('Created Update Successfully');
        this.getEmployeeData();
        this.employeeForm.reset();
      } else {
        this.alertService.error(gResponse.message);
      }
    }, error => {
      this.alertService.error(error);
    });
  }
  editData(id: number) {
    this.isNewRecord = true;
    for (let index = 0; index < this.employeeData.length; index++) {
      const element = this.employeeData[index];
      if (element.id == id) {
        this.employeeForm.patchValue({
          id: element.id,
          firstName: element.firstName,
          lastName: element.lastName,
          mobile: element.mobile,
          emailId: element.emailId,
          address: element.address,
          city: element.city,
          dob: new Date(element.dob) 
        });
      } 
    }
  }
}