import { Component, OnInit } from '@angular/core';
import { fade } from '../animation';
import { FormBuilder, Validators } from '@angular/forms';
import { AjaxService } from '../services/ajax.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations : [ fade ]
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private ajax: AjaxService, private router: Router, private alert: MatSnackBar, private authService: SocialAuthService) {

this.ajax.getauthkey();
  }

  get f_name(): any{
   return this.signupform.get('f_name');
  }

   get l_name(): any{
   return this.signupform.get('l_name');
  }

   get username(): any{
   return this.signupform.get('username');
  }

   get password(): any{
   return this.signupform.get('password');
  }

  public signupform = this.fb.group({

f_name: ['', [Validators.required]],
l_name: ['', [Validators.required]],
username: ['', [Validators.required, Validators.email]],
password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]

  });

  ngOnInit(): void {
  }



  signup(): any{
  const formdata = new FormData();
  formdata.append('auth_key', sessionStorage.auth_key);
  for (const key in this.signupform.value)
  {
  formdata.append(key, this.signupform.value[key]);
  }
  const ajax =  this.ajax.signup(formdata);
  ajax.subscribe((response: any) => {
 const token = this.ajax.verifyToken(response.access_token, 'http://localhost/angular/signup');
 if (token)
        {
        const data = {
        provider : 'CUSTOM',
        access_token : response.access_token,
        };
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigateByUrl('/profile');
        console.log(response);
        }

 },

(error: any) => {
	this.alert.open(error, 'close', {
	duration: 4000,
	});
}
 );
  }


  socialsignup(provider: string): void{
  let s_provider;
  if (provider == 'GOOGLE')
  {
  s_provider = GoogleLoginProvider.PROVIDER_ID;
  }
  else
  {
  s_provider = FacebookLoginProvider.PROVIDER_ID;
  }
  this.authService.signIn(s_provider).then(() => {
   this.socialdata();

   });
  }

  socialdata(): void{
   this.authService.authState.subscribe((user: any) => {
      console.log(user);
      const f_name = user.firstName;
      const l_name = user.lastName;
      const username = user.email;
      this.signupform.patchValue({
      f_name,
      l_name,
      username
      });
   });
  }

}
