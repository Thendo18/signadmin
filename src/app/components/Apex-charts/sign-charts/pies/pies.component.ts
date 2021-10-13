import { Component, OnInit , ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-pies',
  templateUrl: './pies.component.html',
  styleUrls: ['./pies.component.scss']
})
export class PiesComponent {
  @ViewChild("chart") chart: PiesComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() { this.chartOptions = {
    series: [44, 55,],
    chart: {
      width: 200,
      type: "pie"
    },
    labels: ["Active signs", "blacklisted signs", "Active signs"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
