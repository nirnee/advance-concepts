import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { FooterComponent } from './components/admin/footer/footer.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { LeftSidebarComponent } from './components/admin/left-sidebar/left-sidebar.component';
import { AuthLayoutComponent } from './components/auth/auth-layout/auth-layout.component';
import { BlogLayoutComponent } from './components/blog/blog-layout/blog-layout.component';
import { DeleteComponent } from './components/delete/delete.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
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
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
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
