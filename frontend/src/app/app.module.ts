import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './views/patients/list/patients.component';
import { ListDoctorComponent } from './views/doctors/list.doctor/list.doctor.component';
import { HeaderComponent } from './components/header/header.component';
import { AddPatientComponent } from './views/patients/add/add.patient/add.patient.component';
import { AddDoctorComponent } from './views/doctors/add.doctor/add.doctor.component';
import { EditPatientComponent } from './views/patients/edit/edit.patient/edit.patient.component';
import { EditDoctorComponent } from './views/doctors/edit.doctor/edit.doctor.component';
import { HomeComponent } from './views/home/home/home.component';
import { PatientService } from './shared/services/patient.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

import { NgxPermissionsModule } from 'ngx-permissions';
import { authInterceptorProviders } from './shared/_helpers/auth.interceptor';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    ListDoctorComponent,
    HeaderComponent,
    AddPatientComponent,
    AddDoctorComponent,
    EditPatientComponent,
    EditDoctorComponent,
    HomeComponent,
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzButtonModule,
    NzFormModule,
    NzIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    NgxPermissionsModule.forRoot(),
         BrowserAnimationsModule,
         IconsProviderModule,
         NzLayoutModule,
         NzMenuModule
  ],
  providers: [authInterceptorProviders, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
