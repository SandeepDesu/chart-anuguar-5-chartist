import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

import { stackedBarChartData } from '../../example';
@Component({
  selector: 'app-stacked-bar',
  templateUrl: './stacked-bar.component.html',
  styleUrls: ['./stacked-bar.component.css']
})
export class StackedBarComponent implements OnInit {
  labels = [];
  data = [];
  array = [];
  constructor() { }

  ngOnInit() {
    stackedBarChartData.data[0].values.forEach((value) => {
      if (this.array.indexOf(value.c) === -1) {
        this.array.push(value.c);
        this.data.push([]);
        this.data[this.data.length - 1].push(value.y)
      } else {
        this.data[this.array.indexOf(value.c)].push(value.y);
      }
      if (this.labels.indexOf(value.x) === -1) {
        this.labels.push(value.x);
      }
    });
    new Chartist.Bar('#stacked-bar-chart', {
      labels: this.labels,
      series: this.data
    }, {
        stackBars: true,
        axisY: {
          labelInterpolationFnc: function (value) {
            return Math.round(value);
          }
        }
      }).on('draw', function (data) {
        if (data.type === 'bar') {
          data.element.attr({
            style: 'stroke-width: 30px'
          });
        }
        if (data.type === 'grid' && data.index !== 0) {
          data.element.remove();
        }
      });
  }

}
