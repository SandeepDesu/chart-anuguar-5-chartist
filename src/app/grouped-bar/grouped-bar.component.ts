import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { groupedBarChartData } from '../../example';
@Component({
  selector: 'app-grouped-bar',
  templateUrl: './grouped-bar.component.html',
  styleUrls: ['./grouped-bar.component.css']
})
export class GroupedBarComponent implements OnInit {
  labels = [];
  data = [];
  array = [];
  id = this.makeid();
  constructor() { }

  ngOnInit() {
    groupedBarChartData.data[0].values.forEach((value) => {
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
    new Chartist.Bar('#'+this.id, {
      labels: this.labels,
      series: this.data
    }, {
        seriesBarDistance: 10,
        axisY: {
          labelInterpolationFnc: function (value) {
            return Math.round(value);
          },
          scaleMinSpace: 15
        }
      }).on('draw', function (data) {
        if (data.type === 'bar') {
          data.element.attr({
            style: 'stroke-width: 10px'
          });
        }
        if (data.type === 'grid' && data.index !== 0) {
          data.element.remove();
        }
        data.element.animate({
          y2: {
            dur: '0.6s',
            from: data.y1,
            to: data.y2
          }
        });
      });
  }

}
