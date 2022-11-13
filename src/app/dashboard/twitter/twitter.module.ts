import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitterRoutingModule } from './twitter-routing.module';
import { TwitterComponent } from './twitter.component';


@NgModule({
  declarations: [
    TwitterComponent
  ],
  imports: [
    CommonModule,
    TwitterRoutingModule
  ]
})
export class TwitterModule { }
