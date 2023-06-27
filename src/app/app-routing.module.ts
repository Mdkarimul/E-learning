import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{ path: '', loadChildren: () => import('./homepage/mhome/mhome.module').then(m => m.MhomeModule) },

{ path: 'blog', loadChildren: () => import('./blog/mblog/mblog.module').then(m => m.MblogModule) },

{ path: 'courses', loadChildren: () => import('./courses/mcourse/mcourse.module').then(m => m.McourseModule) },

{ path: 'about', loadChildren: () => import('./about/mabout/mabout.module').then(m => m.MaboutModule) },

{ path: 'contact', loadChildren: () => import('./contact/mcontact/mcontact.module').then(m => m.McontactModule) },

{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

{ path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },

{ path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },

{ path: 'forget-password', loadChildren: () => import('./forget-password/forget-password.module').then(m => m.ForgetPasswordModule) }


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
