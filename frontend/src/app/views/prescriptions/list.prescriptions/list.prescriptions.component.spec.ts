import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavComponent } from 'src/app/components/nav/nav.component';

import { ListPrescriptionsComponent } from './list.prescriptions.component';

describe('ListPrescriptionsComponent', () => {
  let component: ListPrescriptionsComponent;
  let fixture: ComponentFixture<ListPrescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ListPrescriptionsComponent, NavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListPrescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
