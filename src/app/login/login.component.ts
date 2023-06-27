import { Component, OnInit } from '@angular/core';
import { fade } from '../animation';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import {  Router } from '@angular/router';
import { AuthControlService } from '../services/auth-control.service';
import { AjaxService } from '../services/ajax.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations : [fade]
})
export class LoginComponent implements OnInit {

  constructor(private authService: SocialAuthService, private router: Router, private authControl: AuthControlService, private ajax: AjaxService, private fb: FormBuilder, private alert: MatSnackBar) {  
     this.islogin();
  }

 //login username validation
  get username(): any{
  return this.loginform.get('username');
  }
//login password validation
  get password(): any
  {
  return  this.loginform.get('password');
  }

  //custom login form
  public loginform = this.fb.group({
  username : ['7mdkarimul@gmail.com', [Validators.email, Validators.required]],
  password : ['12345678', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]]
  });

  ngOnInit(): void {
  this.ajax.getauthkey();
  }


  islogin(): any{
  if (this.authControl.islogin())
  {
  this.router.navigateByUrl('/profile');
  }
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {
      this.refresh_token();
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(() => {
     this.getdata();
    });
  }

//this code is already defined on another page
  // signOut(): void {
  //  this.authService.signOut();
  // }

  refresh_token(): void
  {
   this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID).then(() => {
   this.getdata();
   });
  }

  getdata(): void
  {
  this.authService.authState.subscribe(
   (userdata: any) => {
   if (userdata != null)
   {
   //console.log(userdata);
   // redirect
   const data = {
   username : userdata.name,
   email : userdata.email,
   picture : userdata.photoUrl,
   provider : userdata.provider
   };
   localStorage.setItem('user', JSON.stringify(data));
   this.router.navigateByUrl('/profile');
   }else{
  alert("authentication failed !");
   }
   }
  );
  }

  login(): any
  {
   const username =  this.loginform.value.username;
   const password = this.loginform.value.password;
   const key = sessionStorage.getItem('auth_key');
   const formdata = new FormData();
   formdata.append('username', username);
   formdata.append('password', password);
   formdata.append('auth_key', sessionStorage.auth_key);

   const ajax = this.ajax.loginuser(formdata);
   ajax.subscribe((response: any) => {
     const isvalid =  this.ajax.verifyToken(response.access_token,'http://localhost/rest_api/angular-signup-with-php/login');
     if (isvalid)
    {
      const data = {
           provider: 'CUSTOM',
           access_token: response.access_token,
              };
           localStorage.setItem('user', JSON.stringify(data));
           this.router.navigateByUrl('/profile');
    }
    else
    {
       this.alert.open('Access denied !', '401', {duration: 4000, horizontalPosition: 'right'});
    }
   },
(error: any) => {
  console.log(error);
}
   );
  }

}
