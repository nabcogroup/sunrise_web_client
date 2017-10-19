import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminContentComponent } from './admin-content/admin-content.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminContentComponent,
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
