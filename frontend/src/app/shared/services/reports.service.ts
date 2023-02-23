import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }

  getPrescriptionPDF(dniP: string, endpoint: string): Observable<Blob> {
    const headers = new HttpHeaders().set('Accept', 'application/pdf');
    const params = new HttpParams().set('dniP', dniP);
    return this.http.get<Blob>(endpoint, { headers: headers, params: params, responseType: 'blob' as 'json' });
  }

  getMedicalRecords(idP: number, history: string, endpoint: string): Observable<Blob> {
    const headers = new HttpHeaders().set('Accept', 'application/pdf');
    const params = new HttpParams().set('idP', idP.toString()).set('history', history);
    return this.http.get<Blob>(endpoint, { headers: headers, params: params, responseType: 'blob' as 'json' });
  }

  getDrugChart( endpoint: string): Observable<Blob> {
    const headers = new HttpHeaders().set('Accept', 'application/pdf');
    return this.http.get<Blob>(endpoint, { headers: headers, responseType: 'blob' as 'json' });
  }

}



