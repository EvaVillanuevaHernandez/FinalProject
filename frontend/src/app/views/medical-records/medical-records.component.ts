import { Component } from '@angular/core';
import { ReportsService } from 'src/app/shared/services/reports.service';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.scss']
})
export class MedicalRecordsComponent {

  idP: number;
  history: string;

  constructor(private reportsService: ReportsService) { 
   this.idP=0;
   this.history=" ";
  }

  downloadMedicalRecord() {
    const endpoint = 'http://localhost:8080/patients/exportReport';
    this.reportsService.getMedicalRecords(this.idP, this.history, endpoint)
      .subscribe(response => {
        const file = new Blob([response], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }, error => {
        console.log(error);
      });
  }

}

