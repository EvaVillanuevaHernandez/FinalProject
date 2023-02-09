import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prescriptions } from '../models/prescriptions';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionsService {

  endpoint: string = "http://" + window.location.hostname + ":8080/prescriptions";

  constructor(private http: HttpClient) { }

  getAllPrescriptions() {
    return this.http.get<Array<Prescriptions>>(this.endpoint);
  }

  getPrescription(id: number) {
    return this.http.get<Prescriptions>(this.endpoint + "/" + id);
  }

  
  postPrescription(prescription: Prescriptions/*, file: File*/) {
    let data = new FormData();
    data.append("date", prescription.date.toString());
    data.append("medicine", prescription.medicine);
    data.append("posology", prescription.posology);
    data.append("doctor_id)", prescription.doctor!.toString());
    //data.append("file", file);
    data.append("patient_id", prescription.patient!.toString());
    this.http.post<Prescriptions>(this.endpoint, data).subscribe(response => { }, error => { console.log(error) });
  }

  putPrescription(prescription: Prescriptions, id: number) {
    let data = new FormData();
    data.append("date", prescription.date.toString());
    data.append("medicine", prescription.medicine);
    data.append("posology", prescription.posology);
    data.append("doctor_id)", prescription.doctor!.toString());
    //data.append("file", file);
    data.append("patient_id", prescription.patient!.toString());
    this.http.put(this.endpoint + "/" + id, data).subscribe(response => { }, error => { console.log(error) });
  }

  deletePrescription(id: number) {
    this.http.delete(this.endpoint + "/" + id).subscribe(data => { });
  }
}
