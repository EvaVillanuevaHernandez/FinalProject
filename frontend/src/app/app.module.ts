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
import { HeaderComponent } from './components/header/header.component';
import { AddPatientComponent } from './views/patients/add/add.patient.component';
import { EditPatientComponent } from './views/patients/edit/edit.patient/edit.patient.component';
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
import { NavComponent } from './components/nav/nav.component';
import { NzTableModule } from 'ng-zorro-antd/table';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    HeaderComponent,
    AddPatientComponent,
    EditPatientComponent,
    HomeComponent,
    LoginPageComponent,
    LoginFormComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    NzButtonModule,
    NzFormModule,
    NzTableModule,
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
