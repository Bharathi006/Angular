import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router:Router){}
  register2(){
    this.router.navigate(["auth/login"]);
  }
  login(){
    this.router.navigate(['auth/login'])
  }
  login2=new FormGroup({
    name:new FormControl("",[Validators.required,Validators.pattern(/^[a-zA-z]+$/)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.pattern(/^[a-zA-Z0-9]+@[a-zA-Z0-9@#$!]+$/)]),
    rpassword:new FormControl("",[Validators.required,Validators.pattern(/^[a-zA-Z0-9]+@[a-zA-Z0-9@#$!]+$/)]),
  

  });
  getData(){
    console.log(this.login2.value);
  }
  
get vname(){
  return this.login2.get("name");
}
get ema(){
  return this.login2.get("email");
}
get pwd1(){
  return this.login2.get("password");
}
get pwd2(){
  return this.login2.get("rpassword");
}

}
