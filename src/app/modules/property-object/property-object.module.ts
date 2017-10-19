import { PropertyService } from './service/property.service';
import { AdminComponent } from './../admin/admin.component';
import { AdminModule } from './../admin/admin.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyObjectComponent } from './property-object.component';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'villa',
    component: PropertyObjectComponent,
    children: [
      {
        path: '',
        component: ListComponent,
        outlet: 'admin'
      },
      {
        path: 'create',
        component: RegisterComponent,
        outlet: 'admin'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AdminModule
  ],
  declarations: [
    PropertyObjectComponent,
    ListComponent,
    RegisterComponent
  ],
  providers: [
    PropertyService
  ],
  exports: [
    RouterModule,
  ]
})
export class PropertyObjectModule { }
