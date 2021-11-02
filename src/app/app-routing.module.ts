import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './components/Tables/users/users.component';
import { SignComponent } from './components/Tables/sign/sign.component';
import { BlacklistComponent } from './components/Tables/blacklist/blacklist.component';
import { RequestedComponent } from './components/Tables/requested/requested.component';
import { UserTablePageComponent } from './pages/user-table-page/user-table-page.component';
import { ChartsComponent } from './components/apex-charts/charts/charts.component';




const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  {path: 'charts',component:ChartsComponent},
  {path:'users',component:UsersComponent,pathMatch:'full'},
  {path:'req',component:RequestedComponent,pathMatch:'full'},
  {path:'sign',component:SignComponent,pathMatch:'full'},
  {path:'black',component:BlacklistComponent,pathMatch:'full'},
  {path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
