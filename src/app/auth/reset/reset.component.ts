import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule],
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {

  constructor(private router:Router){}
  pwd(){
    this.router.navigate(["auth/login"]);
  }
  login3=new FormGroup({
    pwd1:new FormControl("",Validators.required),
    pwd2:new FormControl("",[Validators.maxLength(9),
      Validators.pattern(/^[a-zA-Z0-9]+@[a-zA-Z0-9@#$!]+$/)])
  });

  sample(){
    console.log(this.login3.value);
  }
get pd1(){
  return this.login3.get("pwd1");
}
get pd2(){
  return this.login3.get("pwd2");
}
val=1;
val1=1;
valid(){
  if(this.login3.value.pwd1!==this.login3.value.pwd2){
    this.val=0
  }
  else{
    this.val=1;
  }
}
valid1(){
if(this.login3.value.pwd1!==this.login3.value.pwd2 || this.login3.invalid){
  this.val1=1;
}
else{
  this.val1=0;
}
}
}

