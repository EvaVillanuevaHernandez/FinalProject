import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../models/doctors';
import { tap } from 'rxjs';
import { OnlineOfflineService } from './offline-online.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  endpoint: string = "https://" + window.location.hostname + ":8443/doctors";
  

  constructor(private http: HttpClient,
    private onlineOfflineService: OnlineOfflineService,
    private dbService: NgxIndexedDBService
    ) { }

  // getAllDoctors() {
  //   return this.http.get<Array<Doctor>>(this.endpoint);
  // }
  getAllDoctors() {
    if (this.onlineOfflineService.isOnline) {
      return this.http.get<Array<Doctor>>(this.endpoint).pipe(
        tap((doctors: unknown[]) => {
          this.dbService.clear('doctor').subscribe(() => {
            this.dbService.bulkPut('doctor', doctors).subscribe(() => {
              console.log('Doctors stored in local database');
            });
          });
        })
      );
    } else {
      return this.dbService.getAll<Doctor[]>('doctor').pipe(
        tap((doctors: any) => {
          console.log('Doctors retrieved from local database');
        })
      );
    }
  } 

  getDoctor(id: number) {
    return this.http.get<Doctor>(this.endpoint + "/" + id);
  }

  
  postDoctor(doctor: Doctor/*, file: File*/) {
    let data = new FormData();
    data.append("dni", doctor.dni);
    data.append("name", doctor.name);
    data.append("surname", doctor.surname);
    data.append("secondSurname", doctor.secondSurname);
    //data.append("file", file);
    data.append("collegiateNum", doctor.collegiateNum.toString());
    this.http.post<Doctor>(this.endpoint, data).subscribe(response => { }, error => { console.log(error) });
  }

  putDoctor(doctor: Doctor, id: number) {
    let data = new FormData();
    data.append("dni", doctor.dni);
    data.append("name", doctor.name);
    data.append("surname", doctor.surname);
    data.append("secondSurname", doctor.secondSurname);
    data.append("collegiateNum", doctor.collegiateNum.toString());
    this.http.put(this.endpoint + "/" + id, data).subscribe(response => { }, error => { console.log(error) });
  }

  deleteDoctor(id: number) {
    this.http.delete(this.endpoint + "/" + id).subscribe(data => { });
  }
  
}
