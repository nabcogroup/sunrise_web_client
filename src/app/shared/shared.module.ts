import { HttpModule } from '@angular/http';
import { ApiService } from './server/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridViewComponent } from './grid-view/grid-view.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    ApiService
  ],
  declarations: [GridViewComponent],
  exports: [
    HttpModule]
})
export class SharedModule { }
