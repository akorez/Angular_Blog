import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../modules/material/material.module';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { MainNavComponent } from '../nav/main-nav/main-nav.component';
import { ArticleComponent } from './article/article.component';
import { CategoryArticlesComponent } from './category-articles/category-articles.component';
import { SearchComponent } from './search/search.component';
import { ArchiveComponent } from './archive/archive.component';




@NgModule({
  declarations: [
    MainLayoutComponent,
    MainNavComponent,
    AboutMeComponent,
    ContactComponent,
    HomeComponent,
    ArticleComponent,
    CategoryArticlesComponent,
    SearchComponent,
    ArchiveComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    MaterialModule
  ]

})
export class MainModule { }
