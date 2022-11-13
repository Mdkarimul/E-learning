import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';

const material = [
     MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      MatMenuModule,
      MatProgressBarModule,
      MatCardModule,
      MatTabsModule,
      MatDividerModule,
      MatInputModule,
      MatSnackBarModule,
      MatStepperModule,
      MatProgressSpinnerModule,
      MatSidenavModule,
      MatExpansionModule,
      MatTooltipModule

];

@NgModule({
  declarations: [],
  imports: [ material ],
  exports: [ material ]
})
export class MaterialModule { }
