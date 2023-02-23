import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Prescriptions } from 'src/app/shared/models/prescriptions';
import { PrescriptionsService } from 'src/app/shared/services/prescriptions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list.prescriptions',
  templateUrl: './list.prescriptions.component.html',
  styleUrls: ['./list.prescriptions.component.scss']
})
export class ListPrescriptionsComponent {
  prescriptions: Array<Prescriptions> = [];

  constructor(private router: Router,private prescriptionService : PrescriptionsService) {
    this.getAllPrescriptions();
  }

  getAllPrescriptions() {
    this.prescriptionService.getAllPrescriptions().subscribe(data => {
      this.prescriptions = data;
      console.log(this.prescriptions);
    });
  }

  Add() {
    this.router.navigate(['addprescription']);
  }

  delete(id: any) {
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
