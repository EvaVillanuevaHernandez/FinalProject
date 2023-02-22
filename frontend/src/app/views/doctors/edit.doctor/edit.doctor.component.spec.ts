import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { EditDoctorComponent } from './edit.doctor.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NzLayoutComponent, NzSiderComponent } from 'ng-zorro-antd/layout';

describe('EditDoctorComponent', () => {
  let component: EditDoctorComponent;
  let fixture: ComponentFixture<EditDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AppRoutingModule,
        NgxPermissionsModule.forRoot(),
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        EditDoctorComponent,
        NavComponent,
        NzLayoutComponent,
        NzSiderComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
