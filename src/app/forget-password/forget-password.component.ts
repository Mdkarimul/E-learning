import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { conpassword } from '../custom_validators/conpassword';
import { AjaxService } from '../services/ajax.service';
import { MatStepper } from '@angular/material/stepper';
import { fade } from '../animation';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { login, resetpassword } from '../interfaces/http.interface';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
  animations: [ fade ]
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private fb: FormBuilder, private ajax: AjaxService, private alert: MatSnackBar, private router: Router) {

this.ajax.getauthkey();

   }

  get username(): any
  {
  return this.usernameform.get('username');
  }

  get code(): any{
  return this.codeform.get('code');
  }

  get password(): any
  {
  return this.passwordform.get('password');
  }

   get conpassword(): any
  {
  return this.passwordform.get('conpassword');
  }

   public errorMessage = '';
   public iserror = false;
   public usernameloader = false;
   private v_code: any;
   public errorverificationcode = false;

  public usernameform = this.fb.group({
  username : ['7mdkarimul@gmail.com', [Validators.required, Validators.email]],
  });


    public codeform = this.fb.group({
  code : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
  });

    public passwordform = this.fb.group(
    {
  password : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
  conpassword : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
     },

     {
       validator  : conpassword
     }
  );

  ngOnInit(): void {
  }


  finduser(step: MatStepper): any{
  this.usernameloader = true;
  const formdata = new FormData();
  formdata.append('auth_key', sessionStorage.auth_key);
  formdata.append('username', this.username.value);
  const ajax = this.ajax.finduser(formdata);
  ajax.subscribe((response:login) => {
  const verify =  this.ajax.verifyToken(response.access_token,'http://localhost/rest_api/angular-signup-with-php/email');
  if (verify)
  {
  this.v_code = JSON.parse(atob(response.access_token.split('.')[1]));
  this.v_code =  this.v_code.data.code;
  this.usernameloader = false;
  step.next();
  }
  else
  {
  this.username.setErrors({
  invalid : true
  });
  }
  },
(error: string) => {
this.usernameloader = false;
this.iserror = true;
this.errorMessage = error;
this.username.setErrors({
  invalid : true
  });
}
  );
  }



  verifycode(step: MatStepper): void
  {
   if (this.code.value == this.v_code)
   {
   this.errorverificationcode = false;
   step.next();
   }
   else
   {
   this.errorverificationcode = true;
   this.code.setErrors({
   invalid : true
   });
   }
  }




  newpassword(): any
  {
  const formdata = new FormData();
  formdata.append('auth_key', sessionStorage.auth_key);
  formdata.append('username', this.username.value);
  formdata.append('password', this.password.value);
  const ajax = this.ajax.changepassword(formdata);
  ajax.subscribe((response:resetpassword) => {
  this.alert.open(response.message, '', {
  duration : 3000
  });
  setTimeout(() => {
   this.router.navigateByUrl('/login');
  }, 3000);
  },
(error: any) => {
 this.alert.open(error, '', {
  duration : 3000
  });
}

  );
  }

}
