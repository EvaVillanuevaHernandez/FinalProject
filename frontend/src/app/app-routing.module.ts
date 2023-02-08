import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { AddPatientComponent } from './views/patients/add/add.patient.component';
import { PatientsComponent } from './views/patients/list/patients.component';
import { EditPatientComponent } from './views/patients/edit/edit.patient/edit.patient.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'listpatients', component: PatientsComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'addpatient', component: AddPatientComponent },
  { path: 'editpatient', component: EditPatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
