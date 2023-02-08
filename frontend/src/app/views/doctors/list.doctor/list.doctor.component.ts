import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/shared/models/doctors';
import { DoctorService } from 'src/app/shared/services/doctor.service';

@Component({
  selector: 'app-list.doctor',
  templateUrl: './list.doctor.component.html',
  styleUrls: ['./list.doctor.component.scss'],
})
export class ListDoctorComponent {
  doctors: Array<Doctor> = [];

  constructor(private router: Router, private doctorService: DoctorService) {
    this.getAllDoctors();
  }

  getAllDoctors() {
    this.doctorService.getAllDoctors().subscribe((data) => {
      this.doctors = data;
      console.log(this.doctors);
    });
  }

  Add() {
    this.router.navigate(['addDoctor']);
  }
}
