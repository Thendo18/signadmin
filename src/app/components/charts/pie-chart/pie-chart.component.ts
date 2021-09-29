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
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class piechartComponent {
  @ViewChild("chart") chart: piechartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() { this.chartOptions = {
    series: [44, 55, 13, 43, 22],
    chart: {
      width: 380,
      type: "pie"
    },
    labels: ["Active users", "blacklisted users", "Available signs", "Requested signs", "Accepted signs","Rejected signs"],
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
