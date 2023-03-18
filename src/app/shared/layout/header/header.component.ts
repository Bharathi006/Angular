import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router){}
  home1(){
    this.router.navigate(["/dashboard/home"]);
  }
  about(){
    this.router.navigate(["/dashboard/about"]);
  }
  login(){
    this.router.navigate(["/auth/login"]);
  }



}
