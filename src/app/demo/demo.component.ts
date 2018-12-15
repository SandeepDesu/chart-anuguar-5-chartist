import {
  Component, OnInit, Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef
} from '@angular/core';

import { PopUpComponent } from '../pop-up/pop-up.component';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  selectedChart = "BAR_CHART";
  private childComponentRef: any;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) { }

  ngOnInit() {
  }


  changeChart() {
    const childComponentRef = this.componentFactoryResolver
      .resolveComponentFactory(PopUpComponent)
      .create(this.injector);
    this.childComponentRef = childComponentRef;
    this.childComponentRef.instance.selectedItem.subscribe(value => {
      this.selectedChart = value;
      this.appRef.detachView(this.childComponentRef.hostView);
      this.childComponentRef.destroy();
      document.getElementById('modal-container').className = 'hidden';
      document.getElementById('overlay').className = 'hidden';
    });
    this.childComponentRef = childComponentRef;
    this.appRef.attachView(childComponentRef.hostView);
    const childDomElem = (childComponentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.getElementById('modal-container').appendChild(childDomElem);
    document.getElementById('modal-container').className = 'show';
    document.getElementById('overlay').className = 'show';
  }
}
