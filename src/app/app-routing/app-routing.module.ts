import { AdminModule } from './../modules/admin/admin.module';
import { AdminComponent } from './../modules/admin/admin.component';
import { AppLoginComponent } from './../app-login/app-login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AppLoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
   AdminModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
