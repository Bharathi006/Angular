import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{path:'',
children:[
  {path:'home',loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent)},
  {path:'about',loadComponent:()=>import('./about/about.component').then(m=>m.AboutComponent)},
]


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
