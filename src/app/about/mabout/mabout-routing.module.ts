import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaboutComponent } from './mabout.component';

const routes: Routes = [{ path: '', component: MaboutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaboutRoutingModule { }
