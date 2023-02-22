import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavComponent } from 'src/app/components/nav/nav.component';

import { AddPrescriptionsComponent } from './add.prescriptions.component';

describe('AddPrescriptionsComponent', () => {
  let component: AddPrescriptionsComponent;
  let fixture: ComponentFixture<AddPrescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AddPrescriptionsComponent, NavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPrescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
