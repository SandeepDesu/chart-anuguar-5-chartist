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
  }


  createChart() {
    new Chartist.Line('.ct-chart', {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      series: [
       
      ]
    }, {
        fullWidth: true,
        chartPadding: {
          right: 40
        }
      });
  }

}
