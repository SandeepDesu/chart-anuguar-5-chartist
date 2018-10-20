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
  id = this.makeid();
  constructor() { }

  ngOnInit() {
    barData.data[0].values.forEach((value) => {
      this.labels.push(value.x);
      this.data.push(value.y);
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
      series: [this.data]
    }, {
        fullWidth: true,
        chartPadding: {
          right: 40
        },
        axisX: {
          labelFontSize: 10,
        }
      }).on('draw', function (data) {
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
