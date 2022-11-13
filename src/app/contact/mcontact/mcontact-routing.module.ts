import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McontactComponent } from './mcontact.component';

const routes: Routes = [{ path: '', component: McontactComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class McontactRoutingModule { }
