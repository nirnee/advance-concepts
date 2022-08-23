import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlogLayoutComponent } from './components/blog-layout/blog-layout.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthLayoutComponent,
    BlogLayoutComponent
  ],
  imports: [
    CommonModule],
  exports:[
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
