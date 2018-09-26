import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { lineChart } from '../../example';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit {
  labels: any[];
  data: any[];
  constructor() { }

  ngOnInit() {
    lineChart.data[0].values.forEach((value)=>{
          this.labels.push(value.x);
          this.data.push(value.y);
    });
    setTimeout(()=>{
      this.createChart();
    },5000)
  }


  createChart() {
    new Chartist.Line('.ct-chart', {
      labels: this.labels,
      series: this.data
    }, {
        fullWidth: true,
        chartPadding: {
          right: 40
        }
      });
  }

}
