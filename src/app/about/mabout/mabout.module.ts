import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaboutRoutingModule } from './mabout-routing.module';
import { MaboutComponent } from './mabout.component';


@NgModule({
  declarations: [
    MaboutComponent
  ],
  imports: [
    CommonModule,
    MaboutRoutingModule
  ]
})
export class MaboutModule { }
