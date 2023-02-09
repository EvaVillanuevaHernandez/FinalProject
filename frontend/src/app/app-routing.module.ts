import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { AddPatientComponent } from './views/patients/add/add.patient.component';
import { AddDoctorComponent } from './views/doctors/add.doctor/add.doctor.component';
import { PatientsComponent } from './views/patients/list/patients.component';
import { ListDoctorComponent } from './views/doctors/list.doctor/list.doctor.component';
import { EditDoctorComponent } from './views/doctors/edit.doctor/edit.doctor.component';
import { HomeComponent } from './views/home/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'listpatients', component: PatientsComponent },
  { path: 'listdoctors', component: ListDoctorComponent },
  { path: 'edit-doctor/:id', component: EditDoctorComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'addpatient', component: AddPatientComponent },
  { path: 'addDoctor', component: AddDoctorComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
