import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/shared/models/doctors';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit.doctor',
  templateUrl: './edit.doctor.component.html',
  styleUrls: ['./edit.doctor.component.scss'],
})
export class EditDoctorComponent implements OnInit {
  doctorForm: FormGroup;
  collegiateNum: string = '';
  name: string = '';
  surname: string = '';
  secondSurname: string = '';
  dni: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private doctorService: DoctorService
  ) {
    this.doctorForm = this.createForm();
  }

  get collegiateNumberDoctor() {
    return this.doctorForm.get('collegiateNum');
  }
  get nameDoctor() {
    return this.doctorForm.get('name');
  }
  get surnameDoctor() {
    return this.doctorForm.get('surname');
  }
  get secondSurnameDoctor() {
    return this.doctorForm.get('secondSurname');
  }
  get dniDoctor() {
    return this.doctorForm.get('dni');
  }

  createForm() {
    return new FormGroup({
      dni: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      secondSurname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      collegiateNum: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3),
        // Validators.pattern('^[0-9]*$'),
      ]),
    });
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    let doctorData = this.doctorService.getDoctor(id);
    doctorData.forEach((data) => {
      this.collegiateNum = data.collegiateNum;
      this.name = data.name;
      this.surname = data.surname;
      this.secondSurname = data.secondSurname;
      this.dni = data.dni;
    });
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
        this.doctorService.deleteDoctor(id);
        Swal.fire(
          'Done!',
          'Your doctor has been deleted correctly.',
          'success'
        ).then(function () {
          window.location.href = 'admin-home';
        });
      }
    });
  }

  submit() {
    if (this.doctorForm.valid) {
      const id = this.activatedRoute.snapshot.params['id'];
      let doctorData: Doctor = {
        collegiateNum: this.collegiateNum,
        name: this.name,
        surname: this.surname,
        secondSurname: this.secondSurname,
        dni: this.dni,
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
          this.doctorService.putDoctor(doctorData, id);
          Swal.fire(
            'Done!',
            'Your doctor has been updated correctly.',
            'success'
          ).then(function () {
            window.location.href = 'admin-home';
          });
        }
      });
    }
  }
}
