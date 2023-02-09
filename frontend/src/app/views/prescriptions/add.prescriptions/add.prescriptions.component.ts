import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/shared/models/doctors';
import { Patient } from 'src/app/shared/models/patients';
import { Prescriptions } from 'src/app/shared/models/prescriptions';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { PatientService } from 'src/app/shared/services/patient.service';
import { PrescriptionsService } from 'src/app/shared/services/prescriptions.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-add.prescriptions',
  templateUrl: './add.prescriptions.component.html',
  styleUrls: ['./add.prescriptions.component.scss']
})
export class AddPrescriptionsComponent {
  
  prescriptionForm: FormGroup;
  date: Date = new Date();
  medicine: string = '';
  posology: string = '';
  doctor: Array<Doctor> = [];
  doctor_index: number = 0;
  patient: Array<Patient> = [];
  patient_index: number = 0;

  constructor(private prescriptionService: PrescriptionsService, private patienService: PatientService, private doctorService: DoctorService) {
    this.prescriptionForm = this.createForm();
  }

  onChangeDoctor(index: number) {
    console.log("check1 " + this.doctor_index)
    this.doctor_index = index;
    console.log(this.doctor_index)
  }

  onChangePatient(index: number) {
    this.patient_index = index;
    console.log(this.patient_index)
  }

  get datePrescription() {
    return this.prescriptionForm.get('date');
  }
  get medicinePrescription() {
    return this.prescriptionForm.get('medicine');
  }
  get posologyPrescription() {
    return this.prescriptionForm.get('posology');
  }
  get doctorPrescription() {
    return this.prescriptionForm.get('doctor');
  }
  get patientPrescription() {
    return this.prescriptionForm.get('patient');
  }

  createForm() {
    return new FormGroup({
      date: new FormControl('', [
        Validators.required,
        // Validators.minLength(5),
        // Validators.maxLength(10),
      ]),
      medicine: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      posology: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      doctor: new FormControl('', [
        Validators.required,
        // Validators.minLength(2),
        // Validators.maxLength(30),
      ]),
      patient: new FormControl('', [
        Validators.required,
        // Validators.minLength(1),
        // Validators.maxLength(30),
        // Validators.pattern('^[0-9]*$'),
      ]),
    });
  }

  ngOnInit(): void {
    this.patienService.getAllPatients().subscribe(response => {
      this.patient = response;
    });
    this.doctorService.getAllDoctors().subscribe(response => {
      this.doctor = response;
      console.log(response);
    });
  }

  submit() {
    if (this.prescriptionForm.valid) {
      // console.log(this.amount + ' - ' + this.type + ' - ' + this.description + ' - ' + this.price)
      let prescriptionData: Prescriptions = {
        date: this.date,
        medicine: this.medicine,
        posology: this.posology,
        doctor: this.doctor[this.doctor_index],
        patient: this.patient[this.patient_index],
      };
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DAD2BC',
        cancelButtonColor: '#69747C',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          this.prescriptionService.postPrescription(prescriptionData);
          Swal.fire(
            'Done!',
            'Your prescription has been created correctly.',
            'success'
          ).then(function () {
            window.location.href = 'listprescriptions';
          });
        }
      });
    }
  }
}
