import { environment } from './../environments/environment';

const SERVER_API_URL = environment.apiUrl;
export const AUTHENTICATION_URL: string = SERVER_API_URL + '/auth/authenticate';
export const GET_Employee_DATA_URL: string = SERVER_API_URL + '/web/getEmployeeData';   
export const Save_Employee_DATA_URL: string = SERVER_API_URL + '/web/saveEmployeeData';   
export const Delete_Employee_DATA_URL: string = SERVER_API_URL + '/web/deleteEmployee';   
export const Register_DATA_URL: string = SERVER_API_URL + '/auth/registerManager';                                        
  