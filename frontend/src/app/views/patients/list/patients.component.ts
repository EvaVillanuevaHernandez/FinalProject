import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/shared/models/patients';
import { PatientService } from 'src/app/shared/services/patient.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})

export class PatientsComponent {
  patients: Array<Patient> = [];
  

  constructor(private router: Router,private PatientService: PatientService) {
    this.getAllPatients();

  }


  getAllPatients() {
    this.PatientService.getAllPatients().subscribe(data => {
      this.patients = data;
    });
  }

  Add() {
    this.router.navigate(["addpatient"]);
  }

  delete(id:any) {
    Swal.fire({
      title: 'Are you sure you want to delete the patient? ?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#9F73AB',
      cancelButtonColor: '#69747C',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.PatientService.deletePatient(id);
        Swal.fire(
          'Done!',
          'Your patient has been deleted correctly.',
          'success'
        ).then(function () {
          window.location.href = 'listpatients'
        });
      }
    });
  } 

}


