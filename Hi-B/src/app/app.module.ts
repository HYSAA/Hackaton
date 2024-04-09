import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NurseHomePageComponent } from './nurse-home-page/nurse-home-page.component';
import { DoctorHomePageComponent } from './doctor-home-page/doctor-home-page.component';
import { RegistrationNursePatientPageComponent } from './registration-nurse-patient-page/registration-nurse-patient-page.component';
import { HeaderComponent } from './header/header.component';
import { RealDoctorHomepageComponent } from './real-doctor-homepage/real-doctor-homepage.component';
import { RegistrationNurseAddDetailsComponent } from './registration-nurse-add-details/registration-nurse-add-details.component';
import { AddDailyReportComponent } from './add-daily-report/add-daily-report.component';
import { LoginComponent } from './login/login.component';
import { DoctorViewPatientComponent } from './doctor-view-patient/doctor-view-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    NurseHomePageComponent,
    DoctorHomePageComponent,
    RegistrationNursePatientPageComponent,
    HeaderComponent,
    RealDoctorHomepageComponent,
    RegistrationNurseAddDetailsComponent,
    AddDailyReportComponent,
    LoginComponent,
    DoctorViewPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
