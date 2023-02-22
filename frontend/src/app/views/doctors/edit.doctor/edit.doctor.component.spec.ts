import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { EditDoctorComponent } from './edit.doctor.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EditDoctorComponent', () => {
  let component: EditDoctorComponent;
  let fixture: ComponentFixture<EditDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AppRoutingModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        EditDoctorComponent,
        NavComponent,
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
