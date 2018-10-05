import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { barData } from '../../example';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  labels = [];
  data = [];
  constructor() { }

  ngOnInit() {
    barData.data[0].values.forEach((value) => {
      this.labels.push(value.x);
      this.data.push(value.y);
    });
    this.createChart();
  }


  createChart() {
    let chart = new Chartist.Bar('#bar-chart', {
      labels: this.labels,
      series: [this.data]
    }, {
        fullWidth: true,
        horizontalBars: true,
        chartPadding: {
          right: 40
        },
        axisX: {
          labelFontSize: 10,
        }
      });
    chart.on('draw', function (data) {
      if (data.type === 'grid' && data.index !== 0) {
        data.element.remove();
      }
    });
  }

}
