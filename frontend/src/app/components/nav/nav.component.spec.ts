import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NavComponent } from './nav.component';
import { NzHeaderComponent, NzLayoutComponent, NzSiderComponent } from 'ng-zorro-antd/layout';
import { NzModalModule } from 'ng-zorro-antd/modal';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        MatSlideToggleModule,
        NgxPermissionsModule.forRoot(),
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [NavComponent, NzLayoutComponent, NzSiderComponent, NzHeaderComponent],
      // providers: [{ provide: NzModalModule, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
