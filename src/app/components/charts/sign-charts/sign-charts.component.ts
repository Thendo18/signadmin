import { Component, OnInit, ViewChild } from '@angular/core';
import {
 ApexAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-sign-charts',
  templateUrl: './sign-charts.component.html',
  styleUrls: ['./sign-charts.component.scss']
})
export class SignChartsComponent implements OnInit {

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  //@ViewChild("chart") chart: signchartsComponent = new signchartsComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [5, 1 ]
        }

      ],
      chart: {
        height: 350,
        type: "bar",
        width: '25%'
    
      },
      title: {
        text: "Users"
      },
      xaxis: {
        categories: ["Active users", "Blacklisted users"]
      }
    };




    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}

