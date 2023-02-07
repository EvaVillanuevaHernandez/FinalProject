import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { AddPatientComponent } from './views/patients/add/add.patient/add.patient.component';
import { PatientsComponent } from './views/patients/list/patients.component';
import { ListDoctorComponent } from './views/doctors/list.doctor/list.doctor.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'listpatients', component: PatientsComponent },
  { path: 'listdoctors', component: ListDoctorComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'addpatient', component: AddPatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
