import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pop-up',
    templateUrl: './pop-up.component.html',
    styleUrls: ['./pop-up.component.css'],
})

export class PopUpComponent implements OnInit {
    @Output() selectedItem = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    changeChart(item): void {
        this.selectedItem.emit(item);
    }
}