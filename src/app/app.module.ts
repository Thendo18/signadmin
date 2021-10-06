import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlacklistComponent } from './components/Tables/blacklist/blacklist.component';
import { RequestedComponent } from './components/Tables/requested/requested.component';
import { SignComponent } from './components/Tables/sign/sign.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './components/Tables/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { cardsComponent } from './components/cards/cards.component';
import { UserTablePageComponent } from './pages/user-table-page/user-table-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FormsModule } from '@angular/forms';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgApexchartsModule } from 'ng-apexcharts';


//import { ToastrModule } from 'ngx-toastr';        
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignChartsComponent } from './components/charts/sign-charts/sign-charts.component';

import { piechartComponent} from './components/charts/pie-chart/pie-chart.component'
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { MailComponent } from './components/mail/mail.component';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    cardsComponent,
    SignComponent,
    RequestedComponent,
    BlacklistComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UsersComponent,
    NavbarComponent,
    LoginPageComponent,
    UserTablePageComponent,
    ModalContentComponent,
    MailComponent,
   
    SignChartsComponent,
    piechartComponent,
    EditModalComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgApexchartsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
NgbModule 
    //FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ModalContentComponent ]
})
export class AppModule { }
