import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  idPatient: number = 0;
  patients: Array<Patient> = [];
  PatientData: Patient = {
    dni: "",
    name: '',
    image: '',
    surname: '',
    secondSurname: " ",
    history: "",
    doctor: ''
  }

  constructor(private activatedRoute: ActivatedRoute,private router: Router, private patientService: PatientService,private storage: StorageService) {
    this.getAllPatients();

  }
  // ngOnInit() {
  //   this.idPatient = +this.activatedRoute.snapshot.paramMap.get('id')!;
  //   this.patientService.getPatient(this.idPatient).subscribe(
  //     data => {
  //       this.PatientData = data.
  //     }
  //   )
  // }

  getAllPatients() {
    this.patientService.getAllPatients().subscribe(data => {
      this.patients = data;
    });
  }

  Add() {
    this.router.navigate(["addpatient"]);
  }

  selectPatient(id: number) {
    this.idPatient = id;
  }

  delete() {
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
        this.patientService.deletePatient(this.idPatient);
        Swal.fire(
          'Done!',
          'Your patient has been deleted correctly.',
          'success'
        ).then(function () {
          window.location.href = 'listpatients'
        })
      }
    })
  } 

}

