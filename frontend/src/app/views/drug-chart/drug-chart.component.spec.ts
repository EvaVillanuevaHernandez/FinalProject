import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavComponent } from 'src/app/components/nav/nav.component';

import { DrugChartComponent } from './drug-chart.component';

describe('DrugChartComponent', () => {
  let component: DrugChartComponent;
  let fixture: ComponentFixture<DrugChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        DrugChartComponent,
        NavComponent,
        FooterComponent,

      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DrugChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
