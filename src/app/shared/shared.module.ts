import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
  
    NotFoundComponent
  ],
  imports: [
    CommonModule,LayoutModule
  ]
})
export class SharedModule { }
