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
  id = this.makeid();
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
    setTimeout(() => {
      this.createChart();
    }, 200);
  }
  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    return text;
  }
  
  createChart() {
    const seq = 0,
      delays = 80,
      durations = 1000;
    new Chartist.Line('#'+this.id, {
      labels: this.labels,
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
      }).on('draw', function (data) {
        if (data.type === 'grid' && data.index !== 0) {
          data.element.remove();
        }
        if (data.type === 'line') {
          data.element.animate({
            opacity: {
              begin: seq * delays + 1000,
              dur: durations,
              from: 0,
              to: 1
            }
          });
        } else if (data.type === 'point') {
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
