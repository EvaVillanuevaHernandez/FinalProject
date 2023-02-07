import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../models/doctors';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  endpoint: string = "http://" + window.location.hostname + ":8080/doctors";

  constructor(private http: HttpClient) { }

  getAllDoctors() {
    return this.http.get<Array<Doctor>>(this.endpoint);
  }

  getDoctor(id: number) {
    return this.http.get<Doctor>(this.endpoint + "/" + id);
  }

  /*
  postPatient(patient: Doctor, file: File) {
    let data = new FormData();
    data.append("dni", patient.dni);
    data.append("history", patient.history);
    data.append("name", patient.name);
    data.append("surname", patient.surname);
    data.append("secondSurname", patient.secondSurname);
    data.append("file", file);
    data.append("doctor", patient.doctor);
    this.http.post<Patient>(this.endpoint, data).subscribe(response => { }, error => { console.log(error) });
  }

  putPatient(patient: Doctor, id: number) {
    let data = new FormData();
    data.append("dni", patient.dni);
    data.append("history", patient.history);
    data.append("name", patient.name);
    data.append("surname", patient.surname);
    data.append("secondSurname", patient.secondSurname);
    this.http.put(this.endpoint + "/" + id, data).subscribe(response => { }, error => { console.log(error) });
  }

  deletePatient(id: number) {
    this.http.delete(this.endpoint + "/" + id).subscribe(data => { });
  }
  */
}
