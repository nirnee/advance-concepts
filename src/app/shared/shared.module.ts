import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { FooterComponent } from './components/admin/footer/footer.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { LeftSidebarComponent } from './components/admin/left-sidebar/left-sidebar.component';
import { AuthLayoutComponent } from './components/auth/auth-layout/auth-layout.component';
import { BlogLayoutComponent } from './components/blog/blog-layout/blog-layout.component';
import { DeleteComponent } from './components/delete/delete.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthLayoutComponent,
    BlogLayoutComponent,
    HeaderComponent,
    LeftSidebarComponent,
    DeleteComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    ReactiveFormsModule,
    HttpClientModule,
    AdminLayoutComponent,
    AuthLayoutComponent,
    BlogLayoutComponent,
    HeaderComponent,
    LeftSidebarComponent,
    DeleteComponent,
    FooterComponent
  ]
})
export class SharedModule { }
