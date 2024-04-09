import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NurseHomePageComponent } from './nurse-home-page/nurse-home-page.component';
import { DoctorHomePageComponent } from './doctor-home-page/doctor-home-page.component';
import { RegistrationNurseAddDetailsComponent } from './registration-nurse-add-details/registration-nurse-add-details.component';
import { RealDoctorHomepageComponent } from './real-doctor-homepage/real-doctor-homepage.component';
import { RegistrationNursePatientPageComponent } from './registration-nurse-patient-page/registration-nurse-patient-page.component';
import { AddDailyReportComponent } from './add-daily-report/add-daily-report.component';
const routes: Routes = [
  {path: 'nurse-page', component: NurseHomePageComponent},
  {path: 'report-page', component: DoctorHomePageComponent},
  {path: 'doctor-add', component: RegistrationNurseAddDetailsComponent},
  {path: 'doctor-page', component:RealDoctorHomepageComponent},
  {path: 'nurse-daily', component:AddDailyReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
