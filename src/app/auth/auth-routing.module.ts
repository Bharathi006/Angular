import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{path:'',
children:[
  {path:'login',loadComponent:()=>import('./login/login.component').then(m=>m.LoginComponent)},
  {path:'register',loadComponent:()=>import('./register/register.component').then(m=>m.RegisterComponent)},
  {path:'reset',loadComponent:()=>import('./reset/reset.component').then(m=>m.ResetComponent)}
 
]


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
