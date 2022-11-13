import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MhomeComponent } from './mhome.component';

const routes: Routes = [{ path: '', component: MhomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MhomeRoutingModule { }
