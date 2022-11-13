import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
{ path: '',
component: ProfileComponent,
children : [
      { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard/dashboard.module').then(m => m.DashboardModule) },

      { path: 'facebook', loadChildren: () => import('../dashboard/facebook/facebook.module').then(m => m.FacebookModule) },

      { path: 'twitter', loadChildren: () => import('../dashboard/twitter/twitter.module').then(m => m.TwitterModule) },
]



 },







];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
