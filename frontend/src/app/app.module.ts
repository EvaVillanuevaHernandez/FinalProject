import { NgModule, isDevMode } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './views/patients/list/patients.component';
import { HeaderComponent } from './components/header/header.component';
import { AddDoctorComponent } from './views/doctors/add.doctor/add.doctor.component';
import { AddPatientComponent } from './views/patients/add/add.patient.component';
import { EditPatientComponent } from './views/patients/edit/edit.patient/edit.patient.component';
import { EditDoctorComponent } from './views/doctors/edit.doctor/edit.doctor.component';
import { HomeComponent } from './views/home/home/home.component';
import { ListDoctorComponent } from './views/doctors/list.doctor/list.doctor.component';
import { HttpClientModule } from '@angular/common/http';
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
import { NzFooterComponent, NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NavComponent } from './components/nav/nav.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AddPrescriptionsComponent } from './views/prescriptions/add.prescriptions/add.prescriptions.component';
import { EditPrescriptionsComponent } from './views/prescriptions/edit.prescriptions/edit.prescriptions.component';
import { ListPrescriptionsComponent } from './views/prescriptions/list.prescriptions/list.prescriptions.component';
import { SliderComponent } from './components/slider/slider.component';
import { SettingComponent } from './views/setting/setting.component';
import { RegisterComponent } from './views/user/register/register.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from '@abacritt/angularx-social-login';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { PrintPrescriptionComponent } from './views/print-prescription/print-prescription.component';
import { MedicalRecordsComponent } from './views/medical-records/medical-records.component';
import { DrugChartComponent } from './views/drug-chart/drug-chart.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { VideoComponent } from './components/video/video.component';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';
import { ServiceWorkerModule } from '@angular/service-worker';

registerLocaleData(en);

const dbConfig: DBConfig = {
  name: 'prescriptions',
  version: 1,
  objectStoresMeta: [
    {
      store: 'patient',
      storeConfig: { keyPath: 'id', autoIncrement: true }, //quiza no hace falta
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
        { name: 'surname', keypath: 'surname', options: { unique: false } },
        { name: 'history', keypath: 'history', options: { unique: false } },
        {
          name: 'secondSurname',
          keypath: 'secondSurname',
          options: { unique: false },
        },
        { name: 'image', keypath: 'image', options: { unique: false } },
        { name: 'doctor', keypath: 'doctor', options: { unique: false } },
        { name: 'typeImg', keypath: 'typeImg', options: { unique: false } },
      ],
    },
  ],
};
@NgModule({
  declarations: [
    AppComponent,
    AddDoctorComponent,
    ListDoctorComponent,
    PatientsComponent,
    EditDoctorComponent,
    HeaderComponent,
    AddPatientComponent,
    EditPatientComponent,
    HomeComponent,
    LoginPageComponent,
    LoginFormComponent,
    SocialLoginComponent,
    NavComponent,
    AddPrescriptionsComponent,
    EditPrescriptionsComponent,
    ListPrescriptionsComponent,
    SliderComponent,
    SettingComponent,
    RegisterComponent,
    ProfileComponent,
    PrintPrescriptionComponent,
    MedicalRecordsComponent,
    DrugChartComponent,
    FooterComponent,
    SearchBarComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    AppRoutingModule,
    NzButtonModule,
    NzFormModule,
    NzTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    NgxPermissionsModule.forRoot(),
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzLayoutModule, 
    FormsModule,
    YouTubePlayerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    authInterceptorProviders,
    {
      provide: NZ_I18N,
      useValue: en_US,
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '539129123038-inmamfqeg2ad40d5ur1kd5i6vd52d82f.apps.googleusercontent.com","project_id":"angular-377517","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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'
            ),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
