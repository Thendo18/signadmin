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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
//import { ToastrModule } from 'ngx-toastr';        
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { MailComponent } from './components/mail/mail.component';
import { ChartsComponent } from './components/apex-charts/charts/charts.component';
import { PiesComponent } from './components/apex-charts/sign-charts/pies/pies.component';
import { pieComponent } from './components/apex-charts/user-chart/pie/pie.component';
import { GraphComponent } from './components/apex-charts/user-chart/graph/graph.component';
import { GraphsComponent } from './components/apex-charts/sign-charts/graphs/graphs.component';
import { RadialBarComponent } from './components/Apex-charts/sign-charts/radial-bar/radial-bar.component';
import { RadialComponent } from './components/Apex-charts/user-chart/radial/radial.component';
import { ViewGestureComponent } from './components/Modals/request-view/view-gesture/view-gesture.component';
import { ModalContentComponent } from './components/Modals/modal-content/modal-content.component';
import { EditModalComponent } from './components/Modals/edit-modal/edit-modal.component';

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
    ChartsComponent,
    PiesComponent,
    pieComponent,
    GraphComponent,
    GraphsComponent,
    EditModalComponent,
    RadialBarComponent,
    RadialComponent,
    ViewGestureComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    NgApexchartsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
NgbModule ,
    //FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ModalContentComponent ]
})
export class AppModule { }
