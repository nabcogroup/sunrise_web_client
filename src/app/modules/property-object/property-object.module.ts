
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyObjectComponent } from './property-object.component';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';

import { RouterModule, Routes } from '@angular/router';

/*create routing*/
const routes: Routes = [
  {
    path: 'villa',
    component: ListComponent
  },
  {
    path: 'villa/create',
    component: RegisterComponent
  },
  {
    path: 'villa/:id',
    component: RegisterComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PropertyObjectComponent,
    ListComponent,
    RegisterComponent
  ],
  exports: [
    RouterModule
  ]
})
export class PropertyObjectModule { }
