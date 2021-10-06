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
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class pieComponent {
  @ViewChild("chart") chart: pieComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() { this.chartOptions = {
    series: [44, 55,],
    chart: {
      width: 380,
      type: "pie"
    },
    labels: ["Active users", "blacklisted users"],
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
