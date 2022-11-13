import { Component, OnInit, HostListener } from '@angular/core';
import { sticky, fade } from '../animation';
import { AuthControlService } from '../services/auth-control.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations : [
    sticky, fade
  ]
})
export class HeaderComponent implements OnInit {
public sticky = 'start';
public navToggler = true;
public islogin = false;
public username: any;
public scrolltop_icon = false;
@HostListener('window:scroll')
whenscroll(){
	if (window.pageYOffset > 90)
	{
  this.sticky = 'end';
  this.scrolltop_icon = true;
	}
	else
	{
this.sticky = 'start';
this.scrolltop_icon = false;
	}


}
  constructor(private authControl: AuthControlService, private router: Router) {

this.islogin = this.authControl.islogin();
if (this.islogin)
{
  // const data = this.authControl.userdata;

 if (this.authControl.userdata.provider == 'GOOGLE' || this.authControl.userdata.provider == 'FACEBOOK')
 {
 this.username =  this.authControl.userdata.username;
 }
 else
 {
 this.username =  JSON.parse(atob(this.authControl.userdata.access_token.split('.')[1]));
 this.username =  this.username.data.f_name + ' ' + this.username.data.l_name;
 }
}
   }

  ngOnInit(): void {
  }

  navToggle(): void{
  this.navToggler = ! this.navToggler;
  }

  gotop(): void
  {
  window.scroll(0, 0);
  }



  navigate(path: string): void{

    if (path == 'login')
    {
    this.router.navigateByUrl('/login');
    }
    else
    {
    this.authControl.logout();
    }
  }



}
