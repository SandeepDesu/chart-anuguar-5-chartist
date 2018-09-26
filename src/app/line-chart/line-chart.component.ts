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
    let chart = new Chartist.Line('.ct-chart', {
      labels: this.labels,
      series: [this.data]
    }, {
        fullWidth: true,
        chartPadding: {
          right: 40
        },
        axisX:{
          labelFontSize: 20,
        }
      });
      chart.on('draw', function(data) {
        console.log(data);
        if(data.type === 'grid' && data.index !== 0) {
          data.element.remove();
        }
      });
  }

}
