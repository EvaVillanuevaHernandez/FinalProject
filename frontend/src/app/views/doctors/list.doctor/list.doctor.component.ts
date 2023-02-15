import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/shared/models/doctors';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list.doctor',
  templateUrl: './list.doctor.component.html',
  styleUrls: ['./list.doctor.component.scss'],
})
export class ListDoctorComponent {
  doctors: Array<Doctor> = [];
  content: any;
  newArray: any;
  filteredDoctors:Doctor[]=[]
  searchText=""


  constructor(private router: Router, private doctorService: DoctorService, private activatedRoute: ActivatedRoute,) {
    this.getAllDoctors();
  }

  ngOnInit(): void{
    this.search();
  }

  searchKey(data: string) {
    this.searchText = data;
    this.search();
  }

  search() {
    this.filteredDoctors = this.searchText === ""? this.doctors : this.doctors.filter((element) => {
      return element.name.toLowerCase() == this.searchText.toLowerCase();
    });
  }


  getAllDoctors() {
    this.doctorService.getAllDoctors().subscribe((data) => {
      this.doctors = data;
      console.log(this.doctors);
    });
  }

  Add() {
    this.router.navigate(['addDoctor']);
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
        this.doctorService.deleteDoctor(id);
        Swal.fire(
          'Done!',
          'Your doctor has been deleted correctly.',
          'success'
        ).then(function () {
          window.location.href = 'listdoctors';
        });
      }
    });
  }

  searchThis(data: any) {
    this.content = this.newArray
    console.log(data)
    if (data) {
      this.content = this.content.filter(function (ele: { name: string; }, i: any, array: any) {
        let arrayelement = ele.name.toLowerCase()
        return arrayelement.includes(data)
      })
    }
    else {
      console.log(this.content)
    }
    console.log(this.content)
  }
}

