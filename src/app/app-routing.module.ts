import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';
import { DashLayoutComponent } from './shared/layout/dash-layout/dash-layout.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {path:'auth',component:AuthLayoutComponent,loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'dashboard',component:DashLayoutComponent,loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
