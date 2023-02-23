import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzFooterComponent } from 'ng-zorro-antd/layout';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AppRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        NgxPermissionsModule.forRoot(),
      ],
      declarations: [
        RegisterComponent,
        HeaderComponent,
        FooterComponent,
        NzFooterComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
