import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AllInOneModule } from '../all-in-one/all-in-one.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AllInOneModule,
<<<<<<< HEAD
=======


>>>>>>> 7789c88234e9a6c513b4d6f6a2e72c29ad38b20e
  ],
})
export class LoginModule { }
