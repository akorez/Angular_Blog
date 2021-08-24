import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MainModule} from './pages/main.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminNavComponent } from './nav/admin-nav/admin-nav.component';





@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdminNavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
