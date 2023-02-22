import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {
  NzFooterComponent,
  NzHeaderComponent,
  NzLayoutComponent,
  NzSiderComponent,
} from 'ng-zorro-antd/layout';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavComponent } from 'src/app/components/nav/nav.component';

import { PrintPrescriptionComponent } from './print-prescription.component';

describe('PrintPrescriptionComponent', () => {
  let component: PrintPrescriptionComponent;
  let fixture: ComponentFixture<PrintPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule, FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        PrintPrescriptionComponent,
        NavComponent,
        FooterComponent,
        NzLayoutComponent,
        NzSiderComponent,
        NzHeaderComponent,
        NzFooterComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PrintPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
