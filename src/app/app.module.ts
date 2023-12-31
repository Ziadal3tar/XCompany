import { LoadingComponent } from './components/loading/loading.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { FooterComponent } from './components/footer/footer.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { AddadminComponent } from './components/addadmin/addadmin.component';
import { AddServicesComponent } from './components/add-services/add-services.component';
import { InputComponent } from './template/input/input.component';
import { ButtonComponent } from './template/button/button.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';

import { ServicesDetailsComponent } from './components/services-details/services-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CartComponent } from './components/cart/cart.component';
import { StripeModule } from 'stripe-angular';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SignUpComponent,
    LogInComponent,
    FooterComponent,
    OurServicesComponent,
    OurClientsComponent,
    ClientDetailsComponent,
    ContactUsComponent,
    AdminComponent,
    AddadminComponent,
    AddServicesComponent,
    InputComponent,
    ButtonComponent,
    LoadingComponent,
    ServicesDetailsComponent,
    AddClientComponent,
    CartComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    StripeModule.forRoot("pk_test_51MxafiDlUdQmc698VQdKpvuamiY2xVoxKxhSnFad3hsxaBVSzZzGemOqvfUvnLQfp0HdPsNRBSrLUdeGDKCwDtSv0019vVzzac"),
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
