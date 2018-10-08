import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  chartList = ["BAR_CHART", "LINE_CHART", "HORIZONTAL_CHART", "GROUPED_BAR_CHART", "MULTI_LINE_CHART", "AREA_CHART", "DONUT_CHART"];
  selectedChart = "BAR_CHART";
  constructor() { }

  ngOnInit() {
  }


  changeChart(item) {
    this.selectedChart = item;
  }
}
