import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};
@Component({
  selector: "app-radial-bar",
  templateUrl: "./radial-bar.component.html",
  styleUrls: ["./radial-bar.component.scss"],
})
export class RadialBarComponent implements OnInit {
  @ViewChild("chart") chart: RadialBarComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      chart: {
        height: 250,
        type: "radialBar",
      },
      series: [60],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "50%",
            background: "#293450",
          },
          track: {
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 4,
              opacity: 0.15,
            },
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#fff",
              fontSize: "13px",
            },
            value: {
              color: "#fff",
              fontSize: "30px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          gradientToColors: ["#87D4F9"],
          stops: [0, 100],
        },
      },
      labels: ["Total signs"],
    };
  }

  ngOnInit(): void {
  }
}
