import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  selectedChart = "BAR_CHART";
  constructor() { }

  ngOnInit() {
  }


  changeChart(item) {
    this.selectedChart = item;
  }
}
