import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

import { multiLineChartData } from '../../example';
@Component({
  selector: 'app-multi-line',
  templateUrl: './multi-line.component.html',
  styleUrls: ['./multi-line.component.css']
})
export class MultiLineComponent implements OnInit {
  labels = [];
  data = [];
  array = [];
  constructor() { }

  ngOnInit() {
    multiLineChartData.data[0].values.forEach((value) => {
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

    new Chartist.Line('#multi-line-chart', {
      labels:this.labels,
      series: this.data
    }, {
      fullWidth: true,
      chartPadding: {
        right: 40
      },
      axisY: {
        labelInterpolationFnc: function (value) {
          return Math.round(value);
        }
      }
    }).on('draw', function(data) {
      if (data.type === 'grid' && data.index !== 0) {
        data.element.remove();
      }
    });
  }

}
