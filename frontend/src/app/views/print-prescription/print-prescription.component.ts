import { Component } from '@angular/core';
import { ReportsService } from 'src/app/shared/services/reports.service';


@Component({
  selector: 'app-print-prescription',
  templateUrl: './print-prescription.component.html',
  styleUrls: ['./print-prescription.component.scss']
})
export class PrintPrescriptionComponent {

  dniP: string;

  constructor(private reportsService: ReportsService) { 
    this.dniP = '';
  }

  downloadPrescription() {
    const endpoint = 'https://localhost:8443/patients/printPrescription';
    this.reportsService.getPrescriptionPDF(this.dniP,endpoint)
      .subscribe(response => {
        const file = new Blob([response], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }, error => {
        console.log(error);
      });
  }

}
