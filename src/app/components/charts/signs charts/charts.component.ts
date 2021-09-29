import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
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
  selector: 'charts-root',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class chartsComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  @ViewChild("chart") chart: ChartComponent = new ChartComponent;
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

  
}
