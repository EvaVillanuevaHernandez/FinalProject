import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  userForm: FormGroup;
  email: string = '';
  username: string = '';
  password: string = '';

  constructor(private auth: AuthService) {
    this.userForm = this.createForm();
  }


  get emailUser() {
    return this.userForm.get('email');
  }
  get usernameUser() {
    return this.userForm.get('username');
  }
  get passwordUser() {
    return this.userForm.get('password');
  }

  createForm() {
    return new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
      ]),
    });
  }

  ngOnInit(): void {}

  submit() {
    if (this.userForm.valid) {
      // console.log(this.amount + ' - ' + this.type + ' - ' + this.description + ' - ' + this.price)
      let userData: User = {
        email: this.email,
        username: btoa(this.username),
        password: btoa(this.password),
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
          this.auth.register(userData);
          Swal.fire(
            'Done!',
            'Your user has been created correctly.',
            'success'
          ).then(function () {
            window.location.href = 'listpatients';
          });
        }
      });
    }
  }

}
