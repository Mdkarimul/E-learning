import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MblogComponent } from './mblog.component';

const routes: Routes = [{ path: '', component: MblogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MblogRoutingModule { }
