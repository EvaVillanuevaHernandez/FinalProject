import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavComponent } from 'src/app/components/nav/nav.component';

import { ListDoctorComponent } from './list.doctor.component';

describe('ListDoctorComponent', () => {
  let component: ListDoctorComponent;
  let fixture: ComponentFixture<ListDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AppRoutingModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        ListDoctorComponent,
        NavComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
