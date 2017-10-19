import { HttpModule } from '@angular/http';
import { ApiService } from './server/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    ApiService
  ],
  declarations: [],
  exports: [HttpModule]
})
export class SharedModule { }
