import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule  } from 'ng6-toastr-notifications';


@NgModule({
  declarations: [LoginComponent, SignupComponent, ResetpasswordComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule .forRoot(),
    FormsModule,
    RouterModule.forChild([
      { path : 'signup', component : SignupComponent },
      { path :'resetpassword', component : ResetpasswordComponent }
    ])
  ]
})
export class UserModule { }