import { Injectable } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthControlService {
public userdata: any = '';
  constructor(private socialAuth: SocialAuthService, private router: Router) { }

  islogin(): any
  {
  if (localStorage.getItem('user') != null)
  {
  this.userdata = JSON.parse(localStorage.user);
  return true;

  }
  else
  {
  return false;
  }
  }

  logout(): void
  {
  if (this.userdata.provider == 'GOOGLE')
  {
  this.socialAuth.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID).then(() => {
 this.socialAuth.signOut(true).then(() => {
 localStorage.removeItem('user');
 this.router.navigateByUrl('/login');
 });

  });
  }

  if (this.userdata.provider == 'FACEBOOK')
  {
 this.socialAuth.signOut(true).then(() => {
 localStorage.removeItem('user');
 this.router.navigateByUrl('/login');
 });
  }


  if (this.userdata.provider == 'CUSTOM')
  {

 localStorage.removeItem('user');
 this.router.navigateByUrl('/login');

  }



  }
}
