import { Component, NgIterable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/shared/models/doctors';
import { Patient } from 'src/app/shared/models/patients';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { PatientService } from 'src/app/shared/services/patient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add.patient',
  templateUrl: './add.patient.component.html',
  styleUrls: ['./add.patient.component.scss']
})
export class AddPatientComponent {
  patientForm: FormGroup;
  dni: string = '';
  history: string = '';
  name: string = '';
  surname: string = '';
  secondSurname: string = '';
  image: SafeResourceUrl = '';
  doctor: Array<Doctor> = [];
  doctor2: NgIterable<Doctor> = [];
  doctor_index: number = 0;
  typeImg: string = '';
  dataImg: File = new File([''], "oldImage.");

  constructor(
    private patientService: PatientService,
    private doctorService: DoctorService) {
    this.patientForm = this.createForm();
  }

  onChangeDoctor(index: number) {
    console.log("check1 " + this.doctor_index)
    this.doctor_index = index;
    console.log(this.doctor_index)
    this.doctor2 = this.doctor;
    console.log(this.doctor)
  }

  get dniPatient() {
    return this.patientForm.get('dni');
  }

  get historyPatient() {
    return this.patientForm.get('history');
  }

  get namePatient() {
    return this.patientForm.get('name');
  }

  get surnamePatient() {
    return this.patientForm.get('surname');
  }

  get secondSurnamePatient() {
    return this.patientForm.get('secondSurname');
  }

  get doctorPatient() {
    return this.patientForm.get('doctor');
  }

  get filePatient() {
    return this.patientForm.get('file');
  }


  createForm() {
    return new FormGroup({
      dni: new FormControl('',
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.pattern(/^\d{8}[a-zA-Z]$/)
      ]),

      history: new FormControl('',
        [Validators.required,
        Validators.minLength(5)]),

      name: new FormControl('',
        [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)]),

      surname: new FormControl('',
        [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)]),

      secondSurname: new FormControl('',
        [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)]),

      doctor: new FormControl('',
        [Validators.required,
        ]),

      file: new FormControl('',
       [Validators.required]),
    });
  }


  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe(response => {
    this.doctor2 = response;
    console.log(response);
    });
  }

   file(event: any) {
    const file = event.target.files[0];
    this.dataImg = file;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let base64Data = (reader.result as string).split(';');
      let typeImage = base64Data[0].split(':');
      let base64 = base64Data[1].split(',')
      this.image = base64[1];
      this.typeImg = typeImage[1];
    };
  }

  submit() {
    if (this.patientForm.valid) {

      let patientData: Patient = {
        dni: this.dni,
        history: this.history,
        name: this.name,
        surname: this.surname,
        secondSurname: this.secondSurname,
        doctor: this.doctor[this.doctor_index],
        image: '',
       
      };
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DAD2BC',
        cancelButtonColor: '#69747C',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          this.patientService.postPatient(patientData, this.dataImg);
          Swal.fire(
            'Done!',
            'Your patient has been add correctly.',
            'success'
          ).then(function () {
            window.location.href = 'listpatients';
          })
        }
      })
    }
  }
}