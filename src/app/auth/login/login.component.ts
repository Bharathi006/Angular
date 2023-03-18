import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){}
  register3(){
    this.router.navigate(['/auth/register']);
  }
  reset(){
    this.router.navigate(['/auth/reset']);
  }
  dashboard(){
    
    this.router.navigate(['/dashboard/home']);
  }

  login1=new FormGroup({
    mail:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.maxLength(9),
      Validators.pattern(/^[a-zA-Z0-9]+@[a-zA-Z0-9@#$!]+$/)])
  });

  getData(){
    
    console.log(this.login1.value);
    
  }
get vname(){
  return this.login1.get("mail");
}
get vpassword(){
  return this.login1.get("password");
}

}
