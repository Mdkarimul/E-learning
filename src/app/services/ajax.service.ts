import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

public errormsg: any;

  constructor(private http: HttpClient) { }

  getauthkey(): any{
 const ajax =  this.http.get<any>('http://localhost/rest_api/angular-signup-with-php/authkey');
 ajax.subscribe((response: any) => {
  const verify = this.verifyToken(response.auth_key, 'http://localhost/rest_api/angular-signup-with-php/authkey');
  if (verify)
{
	sessionStorage.setItem('auth_key', response.auth_key);
}
 });
  }


  verifyToken(token: any, url: string): any
  {
     const payload = token.split('.')[1];
     const jwt = JSON.parse(atob(payload));
     if (jwt.iss == url)
 {
   return true;
 }
 else
 {
 return false;
 }
 }

 //Observable<any>
 loginuser(formdata: any):Observable<any>
 {
 const key = formdata.get('auth_key');
 const username = formdata.get('username');
 const password = formdata.get('password');
 //?auth_key='+key+'&username='+username+'&password='+password
 const url = 'http://localhost/rest_api/angular-signup-with-php/login?auth_key='+key+'&username='+username+'&password='+password;
 const ajax = this.http.get<any>(url).pipe(catchError(this.handleError));
  return ajax;
 }


 signup(formdata: any): Observable<any>
 {
const ajax =  this.http.post<any>('http://localhost/rest_api/angular-signup-with-php/signup',formdata).pipe(catchError(this.handleError));
return ajax;
 }


 finduser(formdata: any): Observable<any>{
const auth_key = formdata.get('auth_key');
const username = formdata.get('username');
const url = 'http://localhost/angular/find?auth_key=' + auth_key + '&username=' + username;
const ajax = this.http.get<any>(url).pipe(catchError(this.handleError));
return ajax;
 }



 changepassword(formdata: any): Observable<any>
 {
const ajax = this.http.post<any>('http://localhost/angular/resetpassword', formdata).pipe(catchError(this.handleError));
return ajax;
 }
 handleError(error: HttpErrorResponse): Observable<any> {
if (error.error instanceof ErrorEvent)
{
	this.errormsg = 'Check your internate connection';
}
else
{
 if (error.status == 409)
 {
 this.errormsg = error.error.message;
 }

 if (error.status == 401)
 {
 this.errormsg = 'Access denied !';
 }
 if (error.status == 404)
 {
 this.errormsg = error.error.message;
 }
}
return  throwError(this.errormsg);
 }
}
