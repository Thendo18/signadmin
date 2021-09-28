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


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  {path:'users',component:UsersComponent},
  {path:'sign',component:SignComponent},
  {path:'black',component:BlacklistComponent},
  {path:'req',component:RequestedComponent},
  {path:'userTable',component:UserTablePageComponent}
 

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
