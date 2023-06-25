import { Component } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NavcontrolService } from './services/navcontrol.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public control = true;
  constructor(public loader: LoadingBarService, private navcontrol: NavcontrolService ){
  this.hidenav();
  }

  hidenav(): void
  {
  this.navcontrol.subject.subscribe((response: any) => {
  const afterprofile = /\/profile\/*/;
  if  (response == '/login' || response == '/signup' || response == '/forget-password' || response == '/profile' ||  afterprofile.test(response))
   {
   this.control = false;
   }
   else
   {
   this.control = true;
   }

  });
  }



}
