import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/shared/models/doctors';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list.doctor',
  templateUrl: './list.doctor.component.html',
  styleUrls: ['./list.doctor.component.scss'],
})
export class ListDoctorComponent {
  doctors: Array<Doctor> = [];

  constructor(private router: Router, private doctorService: DoctorService, private activatedRoute: ActivatedRoute,) {
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

  delete(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DAD2BC',
      cancelButtonColor: '#69747C',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        this.doctorService.deleteDoctor(id);
        Swal.fire(
          'Done!',
          'Your doctor has been deleted correctly.',
          'success'
        ).then(function () {
          window.location.href = 'listdoctors';
        });
      }
    });
  }
}
