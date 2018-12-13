import { Component, OnInit } from '@angular/core';
import { ModalService } from '../model.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers:[ModalService]
})
export class DemoComponent implements OnInit {
  selectedChart = "BAR_CHART";
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }


  changeChart(item) {
    this.modalService.init(PopUpComponent, {}, {});
    this.selectedChart = item;
  }
}
