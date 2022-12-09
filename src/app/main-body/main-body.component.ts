import { Component, ViewChild } from '@angular/core';
// import * apex from 'ng-apexcharts';
import {
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexNonAxisChartSeries,
  ApexTitleSubtitle,
  ApexAxisChartSeries,
  ApexLegend,
  ChartComponent,
} from 'ng-apexcharts';


@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss'],
})
export class MainBodyComponent {
  series!: ApexAxisChartSeries;
  chart!: ApexChart;
  title!: ApexTitleSubtitle;
  legend!: ApexLegend;
  xaxis!: ApexXAxis;


  ngOnInit(): void {
    this.initializeChartOptions();
  }

  chartSeries: ApexNonAxisChartSeries = [40, 32, 28, 55];

  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true,
    },
  };

  chartLabels = ['Apple', 'Microsoft', 'Facebook', 'Google'];

  chartTitle: ApexTitleSubtitle = {
    text: 'Leading Companies',
    align: 'center',
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true,
  };



  private initializeChartOptions(): void {
    this.title = {
      text: 'Popular Languages',
    };

    this.series = [
      {
        name: 'Java',
        data: [12, 10, 19],
      },
      {
        name: 'Python',
        data: [23, 18, 20],
      },
    ];

    this.chart = {
      type: 'bar',
    };

    this.legend = {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      showForSingleSeries: false,
      onItemClick: {
        toggleDataSeries: false,
      },
    };
  }

  // radar chart
  // @ViewChild('chart') chart!: ChartComponent;
  // public chartOptions: Partial<ChartOptions>;

  // constructor() {
  //   this.chartOptions = {
  //     series: [
  //       {
  //         name: 'Series 1',
  //         data: [80, 50, 30, 40, 100],
  //       },
  //     ],
  //     chart: {
  //       height: 750,
  //       type: 'radar',
  //     },
  //     title: {
  //       text: 'Basic Radar Chart',
  //     },
  //     xaxis: {
  //       categories: ['January', 'February', 'March', 'April', 'May'],
  //     },
  //   };
  // }

  // For button
  home = true;
  budget = false;
  team = false;
  buttonOne = 'active';
  buttonTwo = 'non-active';
  buttonThree = 'non-active';
  showContent(type: string) {
    if (type == 'home') {
      this.home = true;
      this.budget = false;
      this.team = false;
      this.buttonOne = 'active';
      this.buttonTwo = 'non-active';
      this.buttonThree = 'non-active';
    } else if (type == 'budget') {
      this.home = false;
      this.budget = true;
      this.team = false;
      this.buttonOne = 'non-active';
      this.buttonTwo = 'active';
      this.buttonThree = 'non-active';
    } else if (type == 'team') {
      this.home = false;
      this.budget = false;
      this.team = true;
      this.buttonOne = 'non-active';
      this.buttonTwo = 'non-active';
      this.buttonThree = 'active';
    }
  }
}
