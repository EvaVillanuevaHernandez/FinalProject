import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patients';
import { OnlineOfflineService } from './offline-online.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  endpoint: string = "https://" + window.location.hostname + ":8443/patients";

  constructor(private http: HttpClient,
    private onlineOfflineService: OnlineOfflineService,
    private dbService: NgxIndexedDBService

  ) { }

  getAllPatients() {
    if (this.onlineOfflineService.isOnline) {
      return this.http.get<Array<Patient>>(this.endpoint).pipe(
        tap((patients: unknown[]) => {
          this.dbService.clear('patient').subscribe(() => {
            this.dbService.bulkPut('patient', patients).subscribe(() => {
              console.log('Patients stored in local database');
            });
          });
        })
      );
    } else {
      return this.dbService.getAll<Patient[]>('patient').pipe(
        tap((patients: any) => {
          console.log('Patients retrieved from local database');
        })
      );
    }
  } 

  getPatient(id: number) {
    return this.http.get<Patient>(this.endpoint + "/" + id);
  }

  postPatient(patient: Patient, file: File) {
    let data = new FormData();
    data.append("dni", patient.dni);
    data.append("history", patient.history);
    data.append("name", patient.name);
    data.append("surname", patient.surname);
    data.append("secondSurname", patient.secondSurname);
    data.append("file", file);
    data.append("doctor", patient.doctor.toString());
    this.http.post<Patient>(this.endpoint, data).subscribe(response => { }, error => { console.log(error) });
  }

  putPatient(patient: Patient, id: number,file?: File) {
    let data = new FormData();
    data.append("dni", patient.dni);
    data.append("history", patient.history);
    data.append("name", patient.name);
    data.append("surname", patient.surname);
    data.append("secondSurname", patient.secondSurname);
    // data.append("doctor", patient.doctor!.toString());
    if(file != null || file != ''){
      data.append("file", file!);
    }
    this.http.put(this.endpoint + "/" + id, data).subscribe(response => { }, error => { console.log(error) });
  }

  deletePatient(id: number) {
      this.http.delete(this.endpoint + "/" + id).subscribe(data => { });
    }

}