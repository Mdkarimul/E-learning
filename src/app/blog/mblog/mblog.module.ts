import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MblogRoutingModule } from './mblog-routing.module';
import { MblogComponent } from './mblog.component';


@NgModule({
  declarations: [
    MblogComponent
  ],
  imports: [
    CommonModule,
    MblogRoutingModule
  ]
})
export class MblogModule { }
