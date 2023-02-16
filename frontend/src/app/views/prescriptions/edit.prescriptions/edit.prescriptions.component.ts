import { Component, Input, OnInit, NgIterable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/shared/models/doctors';
import { Patient } from 'src/app/shared/models/patients';
import { Prescriptions } from 'src/app/shared/models/prescriptions';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { PatientService } from 'src/app/shared/services/patient.service';
import { PrescriptionsService } from 'src/app/shared/services/prescriptions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit.prescriptions',
  templateUrl: './edit.prescriptions.component.html',
  styleUrls: ['./edit.prescriptions.component.scss'],
})
export class EditPrescriptionsComponent {
  prescriptionForm: FormGroup;
  date: Date = new Date();
  medicine: string = '';
  posology: string = '';
  doctor: Array<Doctor> = [];
  doctor2: NgIterable<Doctor> = [];
  doctor_index: number = 0;
  patient: Array<Patient> = [];
  patient2: NgIterable<Patient> = [];
  patient_index: number = 0;

  constructor(
    private prescriptionService: PrescriptionsService,
    private patienService: PatientService,
    private doctorService: DoctorService,
    private activatedRoute: ActivatedRoute
  ) {
    this.prescriptionForm = this.createForm();
  }

  onChangeDoctor(index: number) {
    console.log('check1 ' + this.doctor_index);
    this.doctor_index = index;
    console.log(this.doctor_index);
    this.doctor2 = this.doctor;
    console.log(this.doctor);
  }

  onChangePatient(index: number) {
    this.patient_index = index;
    console.log(this.patient_index);
    this.patient2 = this.patient;
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
    this.patienService.getAllPatients().subscribe((response) => {
      this.patient2 = response;
    });
    this.doctorService.getAllDoctors().subscribe((response) => {
      this.doctor2 = response;
      console.log(response);
    });

    const id = this.activatedRoute.snapshot.params['id'];
    let prescriptionData = this.prescriptionService.getPrescription(id);
    prescriptionData.forEach((data) => {
      this.date = data.date;
      this.medicine = data.medicine;
      this.posology = data.posology;
      // this.doctor = data.doctor;
      // this.dni = data.dni;
    });

  }

  submit() {
    if (this.prescriptionForm.valid) {
      const id = this.activatedRoute.snapshot.params['id'];
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
          this.prescriptionService.putPrescription(prescriptionData, id);
          Swal.fire(
            'Done!',
            'Your prescription has been updated correctly.',
            'success'
          ).then(function () {
            window.location.href = 'listprescriptions';
          });
        }
      });
    }
  }

  delete() {
    const id = this.activatedRoute.snapshot.params['id'];
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
        this.prescriptionService.deletePrescription(id);
        Swal.fire(
          'Done!',
          'Your prescription has been deleted correctly.',
          'success'
        ).then(function () {
          window.location.href = 'listprescriptions';
        });
      }
    });
  }

}
