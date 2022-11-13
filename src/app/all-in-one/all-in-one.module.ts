import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

const all = [
 MaterialModule,
 FlexLayoutModule,
 ReactiveFormsModule

];
@NgModule({
  declarations: [],
  imports: [all],
  exports : [all]
})
export class AllInOneModule { }
