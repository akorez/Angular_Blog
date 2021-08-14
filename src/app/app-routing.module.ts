import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';



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
        //www.ornek.com/hakkimizda
        path:"hakkimizda",
        component:AboutMeComponent
      },
      {
      //www.ornek.com/iletisim
        path:"iletisim",
        component:ContactComponent
      }
    ]
  },
  {
    //www.ornek.com/admin
    path:"admin",
    component:AdminLayoutComponent,
    children:[]
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
