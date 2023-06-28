import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthControlService } from '../services/auth-control.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { shrinknav, shrinksection } from '../animation';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations : [ shrinknav, shrinksection ],
})
export class ProfileComponent implements AfterViewInit {
  constructor(private router: Router, private authControl: AuthControlService, private device: DeviceDetectorService) {
    this.secure_profile();
   }
   @ViewChild('sidebar')sidebar: any;

  public islogin = false;
  public customdata: any;
  public user_data: any;
  panelOpenState = false;
  public control = 'maximize';

public menu: any[] = [
{
  submenu : false,
  label  : 'Dashboard',
  icon : 'leaderboard',
  link : 'dashboard'
},
{
  submenu : true,
  label  : 'Social',
  icon : 'feed',
 submenu_items : [
   {
  label  : 'Facebook',
  icon : 'facebook',
  link : 'facebook'
   },
    {
  label  : 'Twitter',
  icon : 'account_circle',
  link : 'twitter'
   },
  ]
},
{
  submenu : true,
  label : 'Branches',
  icon : 'language',
  submenu_items : [

   {
   label : 'India',
   icon : 'location_city',
   link : 'India'
   },
   {
   label : 'America',
   icon : 'location_city',
   link : 'Amerika'
   }
  ]
},
{
  submenu : true,
  label  : 'Social',
  icon : 'feed',
 submenu_items : [

   {
  label  : 'Facebook',
  icon : 'facebook',
  link : 'facebook'
   },

    {
  label  : 'Twitter',
  icon : 'account_circle',
  link : 'twitter'
   },
  ]
},
{
  submenu : true,
  label : 'Branches',
  icon : 'language',
  submenu_items : [
   {
   label : 'India',
   icon : 'location_city',
   link : 'India'
   },
   {
   label : 'America',
   icon : 'location_city',
   link : 'Amerika'
   }
  ]
}
];



 //detect user device
  ngAfterViewInit(): void {
  if (this.device.isMobile() || this.device.isTablet())
  {
     this.sidebar.close();
     this.sidebar.mode = 'over';
  }
  }

 //control navigation  
sidenavcontrol(): void
{
 if (this.control == 'maximize')
 {
 this.control = 'minimize';
 }
 else
 {
 this.control = 'maximize';
 }

}


//secure profile page from unauthenticated users
  secure_profile(): void
  {
  if (this.authControl.islogin())
  {
 this.user_data =  this.authControl.userdata;
 this.islogin = true;
 if (this.user_data.provider == 'GOOGLE' || this.user_data.provider == 'FACEBOOK')
  {
      this.user_data =  this.authControl.userdata;
  }
  else
  {
    this.customdata =  JSON.parse(atob(this.user_data.access_token.split('.')[1]));
    this.customdata = this.customdata.data;
  }
  }
  else
  {
  this.router.navigateByUrl('');
  }
  }

  //user logout coding 
  logout(){
    this.authControl.logout();
  }
}
