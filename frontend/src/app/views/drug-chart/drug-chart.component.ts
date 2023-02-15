import { Component } from '@angular/core';
import { ReportsService } from 'src/app/shared/services/reports.service';

@Component({
  selector: 'app-drug-chart',
  templateUrl: './drug-chart.component.html',
  styleUrls: ['./drug-chart.component.scss']
})
export class DrugChartComponent {

  constructor(private reportsService: ReportsService) {

  }

  downloadChartRecord() {
    const endpoint = 'http://localhost:8080/patients/exportPrescription';
    this.reportsService.getDrugChart(endpoint)
      .subscribe(response => {
        const file = new Blob([response], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }, error => {
        console.log(error);
      });
  }

}
