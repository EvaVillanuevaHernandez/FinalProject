import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/shared/models/patients';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})

export class PatientsComponent {

  patients: Array<Patient> = [];


  constructor(private router: Router, private patientService: PatientService) {
    this.getAllPatients();
  }

  getAllPatients() {
    this.patientService.getAllPatients().subscribe(data => {
      this.patients = data;
    });
  }

    Add(){
    this.router.navigate(["addpatient"]);
  }

}
