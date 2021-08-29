import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {MaterialModule} from '../modules/material/material.module';
import {ComponentsModule} from '../components/components.module';
import { AdminLayoutComponent } from '../layout/admin-layout/admin-layout.component';
import { AdminNavComponent } from '../nav/admin-nav/admin-nav.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminArticleComponent } from './articles/article/article.component';
import { ArticleUpdateComponent } from './articles/article-update/article-update.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleAddComponent } from './articles/article-add/article-add.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminNavComponent,
    AdminHomeComponent,
    AdminArticleComponent,
    ArticleAddComponent,
    ArticleUpdateComponent,
    ArticleListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    ComponentsModule,
    CKEditorModule
  ]
})
export class AdminModule { }
