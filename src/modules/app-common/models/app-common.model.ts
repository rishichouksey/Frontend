export interface Response {
    status:string;
    message:string;
    token:string;
    response:Object;
}
export interface AlertMessage {
    type:string;
    message:string;
}
export interface EmployeeData {
    id:number;
    emailId:string;
    firstName:string;
    lastName:string;
    address:string;
    dob:string;
    mobile:string;
    city:string;
}
