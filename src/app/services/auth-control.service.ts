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
    alert("g");
  this.socialAuth.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID).then(() => {
 this.socialAuth.signOut(true).then(() => {
 localStorage.removeItem('user');
 this.router.navigateByUrl('/login');
 });
  });
  }

 else if(this.userdata.provider == 'FACEBOOK')
  {
    alert("f");
      this.socialAuth.signOut(true).then(() => {
        localStorage.removeItem('user');
        this.router.navigateByUrl('/login');
        });
   
  }


  else if (this.userdata.provider == 'CUSTOM')
  {
    alert();
 localStorage.removeItem('user');
 this.router.navigateByUrl('/login');
  }
  }

}
