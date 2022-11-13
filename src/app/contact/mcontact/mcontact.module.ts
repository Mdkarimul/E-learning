import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { McontactRoutingModule } from './mcontact-routing.module';
import { McontactComponent } from './mcontact.component';


@NgModule({
  declarations: [
    McontactComponent
  ],
  imports: [
    CommonModule,
    McontactRoutingModule
  ]
})
export class McontactModule { }
