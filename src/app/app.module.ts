import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { SliderComponent } from './admin/slider/slider.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './admin/home/home.component';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { AngularDateTimePickerModule} from 'angular2-datetimepicker';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserIdleModule } from 'angular-user-idle';
import { MyDatePickerModule } from 'mydatepicker';
import { ChartsModule } from 'ng2-charts';
import { UpdateComponent } from './admin/update/update.component';
import{AddempComponent} from './admin/addemp/addemp.component';
import { EmpdetailsComponent } from './admin/empdetails/empdetails.component';
import { BankbranchComponent } from './admin/bankbranch/bankbranch.component';
import { EmpunitComponent } from './admin/empunit/empunit.component';
import { MasterbankComponent } from './admin/masterbank/masterbank.component';
import { MasterunitComponent } from './admin/masterunit/masterunit.component';
import { RegionalofficeComponent } from './admin/regionaloffice/regionaloffice.component';
import { NewbankmasterComponent } from './admin/newbankmaster/newbankmaster.component';
import { NewroComponent } from './admin/newro/newro.component';
import { NewunitComponent } from './admin/newunit/newunit.component'
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SliderComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UpdateComponent,
    AddempComponent,
    EmpdetailsComponent,
    BankbranchComponent,
    EmpunitComponent,
    MasterbankComponent,
    MasterunitComponent,
    RegionalofficeComponent,
    NewbankmasterComponent,
    NewroComponent,
    NewunitComponent
  ],
  imports: [
    MyDatePickerModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule, 
    AngularDateTimePickerModule,
    ChartsModule,
     UserIdleModule.forRoot({idle: 27000, timeout: 27000, ping: 27000})
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
		CUSTOM_ELEMENTS_SCHEMA,
		NO_ERRORS_SCHEMA
	]
})
export class AppModule {
  
 }
