import { SharedModule } from './shared/shared.module';
import { HttpModule } from '@angular/http';
import { PropertyObjectModule } from './modules/property-object/property-object.module';
import { AppLoginModule } from './app-login/app-login.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PropertyObjectModule,
    AppLoginModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
