import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';


import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContextComponent } from './context/context.component';
import { NavComponent } from './nav/nav.component';
import { ExtractComponent } from './extract/extract.component';




const routes: Routes = [
  {path: '', component: HomeComponent},

  
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'context ', component:ContextComponent},
  {path:'nav ', component:NavComponent},
  {path:'sidebar', component:SidebarComponent},
  {path:'extract', component:ExtractComponent},
  {path:'foot', component:FooterComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
