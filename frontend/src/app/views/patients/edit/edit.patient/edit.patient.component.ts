import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/shared/models/patients';
import { PatientService } from 'src/app/shared/services/patient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit.patient',
  templateUrl: './edit.patient.component.html',
  styleUrls: ['./edit.patient.component.scss']
})
export class EditPatientComponent implements OnInit {
  patientForm: FormGroup;
  dni: string = '';
  name: string = '';
  history: string = '';
  surname: string = '';
  secondSurname: string = '';
  image: SafeResourceUrl = '';
  typeImg: string = '';
  dataImg: File = new File([''], "oldImage.");

  constructor(private activatedRoute: ActivatedRoute, private patientService: PatientService) {
    this.patientForm = this.createForm();
  }

  get dniPatient() { return this.patientForm.get('dni'); }
  get historyPatient() { return this.patientForm.get('history'); }
  get namePatient() { return this.patientForm.get('name'); }
  get surnamePatient() { return this.patientForm.get('surname'); }
  get secondSurnamePatient() { return this.patientForm.get('secondSurname'); }
  get doctorPatient() { return this.patientForm.get('doctor'); }
  get filePatient() { return this.patientForm.get('file'); }

  createForm() {
    return new FormGroup({
      dni: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10), Validators.pattern('^[0-9,]*$')]),
      file: new FormControl('', [Validators.required]),
      history: new FormControl('', [Validators.required, Validators.minLength(5)]),
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      secondSurname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      doctor: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
    });
  }


  ngOnInit(): void { }

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


  delete() {
    const id = this.activatedRoute.snapshot.params['id'];
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DAD2BC',
      cancelButtonColor: '#69747C',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.patientService.deletePatient(id);
        Swal.fire(
          'Done!',
          'Your apartment has been deleted correctly.',
          'success'
        ).then(function () {
          window.location.href = 'admin-home';
        })
      }
    })
  }

  submit() {
    if (this.patientForm.valid) {

      let patientData: Patient = {
        dni: this.dni,
        image: '',
        history: this.history,
        name: this.name,
        surname: this.surname,
        secondSurname: this.secondSurname,
        doctor: ''
      }
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
            'Your apartment has been created correctly.',
            'success'
          ).then(function () {
            window.location.href = 'admin-home';
          })
        }
      })
    }
  }
}