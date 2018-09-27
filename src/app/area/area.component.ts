import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { areaChartData } from '../../example';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})

export class AreaComponent implements OnInit {
  labels = [];
  data = [];
  constructor() { }

  ngOnInit() {
    areaChartData.data[0].values.forEach((value) => {
      this.labels.push(value.x);
      this.data.push(value.y);
    });
    this.createChart();
  }


  createChart() {
    let chart = new Chartist.Line('#area-chart', {
      labels: this.labels,
      series: [this.data]
    }, {
        fullWidth: true,
        showArea: true,
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
      });
    chart.on('draw', function (data) {
      if (data.type === 'grid' && data.index !== 0) {
        data.element.remove();
      }
    });

  }
}
