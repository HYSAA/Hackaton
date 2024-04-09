import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NurseHomePageComponent } from './nurse-home-page/nurse-home-page.component';
import { DoctorHomePageComponent } from './doctor-home-page/doctor-home-page.component';
import { RegistrationNursePatientPageComponent } from './registration-nurse-patient-page/registration-nurse-patient-page.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NurseHomePageComponent,
    DoctorHomePageComponent,
    RegistrationNursePatientPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
