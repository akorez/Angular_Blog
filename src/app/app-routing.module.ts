import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ArticleComponent } from './pages/article/article.component';
import { CategoryArticlesComponent } from './pages/category-articles/category-articles.component';
import { SearchComponent } from './pages/search/search.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { AdminHomeComponent } from './admin-pages/admin-home/admin-home.component';

import { ArticleAddComponent } from './admin-pages/articles/article-add/article-add.component';
import { ArticleListComponent } from './admin-pages/articles/article-list/article-list.component';
import { ArticleUpdateComponent } from './admin-pages/articles/article-update/article-update.component';
import { AdminArticleComponent } from './admin-pages/articles/article/article.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';



const routes: Routes = [
  {
    //www.ornek.com/
    path:"",
    component:MainLayoutComponent,
    children:[
      {
        path:"",
        component:HomeComponent
      },
      {
        path:"sayfa/:page",
        component:HomeComponent

      },
      {
        path:"makale/:title/:id",
        component:ArticleComponent

      },
      {
        path:"category/:name/:id",
        component:CategoryArticlesComponent

      },
      {
        path:"category/:name/:id/sayfa/:page",
        component:CategoryArticlesComponent

      },
      {
        path:"arama/sayfa/:page",
        component:SearchComponent
      },
      {
        path:"arsiv/:year/:month",
        component:ArchiveComponent

      },
      {
        path:"arsiv/:year/:month/sayfa/:page",
        component:ArchiveComponent

      },
      {
        //www.ornek.com/hakkimizda
        path:"hakkimizda",
        component:AboutMeComponent
      },
      {
      //www.ornek.com/iletisim
        path:"iletisim",
        component:ContactComponent
      },
      {
        path:"adminlogin",
        component:AdminLoginComponent
      }
    ]
  },
  {
    //www.ornek.com/admin 
    path:"admin",
    component:AdminLayoutComponent,
    canActivate:[AuthGuardService],
    children:[
      {
        path:"",
        component:AdminHomeComponent
      },
      {
        path:"anasayfa",
        component:AdminHomeComponent
      },
      {
        path:"makale",
        component:AdminArticleComponent,
        children:[
          {
            path:"ekle",
            component:ArticleAddComponent
          },
          {
            path:"liste",
            component:ArticleListComponent
          },
          {
            path:"guncelle/:id",
            component:ArticleUpdateComponent
          }
        ]
      }
    ]
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
