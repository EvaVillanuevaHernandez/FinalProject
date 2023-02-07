import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/shared/models/doctors';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add.doctor',
  templateUrl: './add.doctor.component.html',
  styleUrls: ['./add.doctor.component.scss']
})
export class AddDoctorComponent {

}
