import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavComponent } from 'src/app/components/nav/nav.component';

import { EditPrescriptionsComponent } from './edit.prescriptions.component';

describe('EditPrescriptionsComponent', () => {
  let component: EditPrescriptionsComponent;
  let fixture: ComponentFixture<EditPrescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [EditPrescriptionsComponent, NavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditPrescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
