import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Prescriptions } from 'src/app/shared/models/prescriptions';
import { PrescriptionsService } from 'src/app/shared/services/prescriptions.service';

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
}
