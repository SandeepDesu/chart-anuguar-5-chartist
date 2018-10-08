import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { lineChart } from '../../example';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit {
  labels = [];
  data = [];
  constructor() { }

  ngOnInit() {
    lineChart.data[0].values.forEach((value) => {
      this.labels.push(value.x);
      this.data.push(value.y);
    });
    this.createChart();
  }


  createChart() {
    const  seq = 0,
    delays = 80,
    durations = 1000;
    new Chartist.Line('#line-chart', {
      labels: this.labels,
      series: [this.data]
    }, {
        fullWidth: true,
        chartPadding: {
          right: 40
        },
        axisX: {
          labelFontSize: 20,
        },
        axisY: {
          labelInterpolationFnc: function (value) {
            return Math.round(value);
          }
        }
      }).on('draw', function (data) {
      if (data.type === 'grid' && data.index !== 0) {
        data.element.remove();
      }
      if(data.type === 'line') {
        data.element.animate({
          opacity: {
            begin: seq * delays + 1000,
            dur: durations,
            from: 0,
            to: 1
          }
        });
      }else if(data.type === 'point') {
        data.element.animate({
          x1: {
            begin: seq * delays + 500,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: 'easeOutQuart'
          },
          x2: {
            begin: seq * delays + 500,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: 'easeOutQuart'
          },
          opacity: {
            begin: seq * delays + 500,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'easeOutQuart'
          }
        });
      }
    });
  }

}
