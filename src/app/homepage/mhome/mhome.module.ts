import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MhomeRoutingModule } from './mhome-routing.module';
import { MhomeComponent } from './mhome.component';
import { SearchComponent } from '../search/search.component';
import { AllInOneModule } from '../../all-in-one/all-in-one.module';
import { CategoryComponent } from '../category/category.component';
import { CoursesComponent } from '../courses/courses.component';
import { FeaturedComponent } from '../featured/featured.component';
import { CounterComponent } from '../counter/counter.component';
import { TeamsComponent } from '../teams/teams.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { CarrierComponent } from '../carrier/carrier.component';



@NgModule({
  declarations: [
    MhomeComponent,
    SearchComponent,
    CategoryComponent,
    CoursesComponent,
    FeaturedComponent,
    CounterComponent,
    TeamsComponent,
    FeedbackComponent,
    CarrierComponent
  ],
  imports: [
    CommonModule,
    MhomeRoutingModule,
    AllInOneModule
  ]
})
export class MhomeModule { }
