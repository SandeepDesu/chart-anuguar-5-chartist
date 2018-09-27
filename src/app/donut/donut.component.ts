import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { donutData } from '../../example';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {
  labels = [];
  data = [];
  constructor() { }

  ngOnInit() {
    donutData.data[0].values.forEach((value) => {
      this.labels.push(value.x);
      this.data.push(value.y);
    });
   let chart = new Chartist.Pie('#donut-chart', {
      series: this.data,
      labels: this.labels
    }, {
      donut: true,
      donutWidth: 60,
      donutSolid: true,
      startAngle: 270,
      showLabel: true
    });
    
  }

}
