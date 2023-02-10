import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { AddPatientComponent } from './views/patients/add/add.patient.component';
import { AddDoctorComponent } from './views/doctors/add.doctor/add.doctor.component';
import { PatientsComponent } from './views/patients/list/patients.component';
import { ListDoctorComponent } from './views/doctors/list.doctor/list.doctor.component';
import { EditDoctorComponent } from './views/doctors/edit.doctor/edit.doctor.component';
import { ListPrescriptionsComponent } from './views/prescriptions/list.prescriptions/list.prescriptions.component';
import { EditPrescriptionsComponent } from './views/prescriptions/edit.prescriptions/edit.prescriptions.component';
import { AddPrescriptionsComponent } from './views/prescriptions/add.prescriptions/add.prescriptions.component';
import { HomeComponent } from './views/home/home/home.component';
import { SettingComponent } from './views/setting/setting.component';
import { EditPatientComponent } from './views/patients/edit/edit.patient/edit.patient.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'listpatients', component: PatientsComponent },
  { path: 'listdoctors', component: ListDoctorComponent },
  { path: 'listprescriptions', component: ListPrescriptionsComponent },
  {path: 'edit-doctor/:id', component: EditDoctorComponent},
  {path: 'edit-prescription/:id', component: EditPrescriptionsComponent},
  {path: 'edit-patient/:id', component: EditPatientComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'addpatient', component: AddPatientComponent },
  { path: 'addDoctor', component: AddDoctorComponent },
  { path: 'addprescription', component: AddPrescriptionsComponent },
  {path : 'home', component: HomeComponent},
  {path : 'settings', component: SettingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
