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
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  //@ViewChild("chart") chart: signchartsComponent = new signchartsComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Signs",
          data: [10, 5 , 10, ],

          
        }

      ],
      chart: {
        height: 350,
        type: "bar",
        width: '80%'
        
    
      },
      title: {
        text: "Signs"
      },

      xaxis: {
        categories: ["Accepted signs ", " Rejected signs", "Available signs"]
      },
      
      
    };




    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}

