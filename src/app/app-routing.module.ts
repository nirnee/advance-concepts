import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterLoginGuard } from './shared/guard/after-login.guard';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule),
    canActivate: [AfterLoginGuard]
  },
  {
    path:'admin',
    loadChildren: () => import('./admin/admin.module').then(m=>m.AdminModule),
    canActivate:[AuthGuard]
  },
  {
    path:'user',
    loadChildren:()=> import('./user/user.module').then(m=>m.UserModule),
    canActivate:[AuthGuard]
  },
  {
    path:'**',
    loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule),
    canActivate: [AfterLoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
