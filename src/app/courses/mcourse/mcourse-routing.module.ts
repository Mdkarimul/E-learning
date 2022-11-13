import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McourseComponent } from './mcourse.component';

const routes: Routes = [{ path: '', component: McourseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class McourseRoutingModule { }
