import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { YouTubePlayer } from '@angular/youtube-player';
import {
  NzHeaderComponent,
  NzLayoutComponent,
  NzSiderComponent,
} from 'ng-zorro-antd/layout';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { VideoComponent } from 'src/app/components/video/video.component';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AppRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        NgxPermissionsModule.forRoot(),
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        ProfileComponent,
        NavComponent,
        VideoComponent,
        NzLayoutComponent,
        NzSiderComponent,
        NzHeaderComponent,
        YouTubePlayer,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
