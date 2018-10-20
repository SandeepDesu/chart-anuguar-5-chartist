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
  animate = null;
  id = this.makeid();
  constructor() { }

  ngOnInit() {
    donutData.data[0].values.forEach((value) => {
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
    new Chartist.Pie('#'+this.id, {
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
