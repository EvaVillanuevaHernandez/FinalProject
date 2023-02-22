import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FooterComponent } from './footer.component';
import { NzFooterComponent } from 'ng-zorro-antd/layout';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        MatSlideToggleModule,
        NgxPermissionsModule.forRoot(),
      ],
      declarations: [FooterComponent, NzFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
