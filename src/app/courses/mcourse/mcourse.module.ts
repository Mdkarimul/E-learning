import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { McourseRoutingModule } from './mcourse-routing.module';
import { McourseComponent } from './mcourse.component';


@NgModule({
  declarations: [
    McourseComponent
  ],
  imports: [
    CommonModule,
    McourseRoutingModule
  ]
})
export class McourseModule { }
