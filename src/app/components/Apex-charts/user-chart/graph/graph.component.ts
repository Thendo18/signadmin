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
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  //@ViewChild("chart") chart: signchartsComponent = new signchartsComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Users",
          data: [5, 1 , 10, ],

          
        }

      ],
      chart: {
        height: 350,
        type: "bar",
        width: '60%'
        
    
      },
      title: {
        text: "Users"
      },

      xaxis: {
        categories: ["Active users","Blacklisted users",  "Active users ", ]
      },
      
      
    };




    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}

