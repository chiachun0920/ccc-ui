import { Component, OnInit } from '@angular/core';
import { ItemBoxDS } from '../models';

@Component({
    templateUrl: 'item-box-demo.component.html'
})
export class ItemBoxDemoComponent implements OnInit {
    private height: string = '200px';
    private keyName = '鍵值';
    private valueName = '內容';
    private data;
    constructor() {
    }

    ngOnInit() {

    }

    private itemBoxDS: ItemBoxDS[] = [
        { key: "", value: "" },
        { key: "01", value: "I" },
        { key: "02", value: "II" },
        { key: "03", value: "III" },
        { key: "04", value: "IV" },
        { key: "05", value: "V" },
        { key: "06", value: "VI" },
        { key: "07", value: "VII" },
        { key: "08", value: "VIII" },
        { key: "09", value: "IX" },
        { key: "10", value: "X" }
    ];

    private onFocusItem(data: ItemBoxDS): void {
        /*　do something ...*/
        this.data = data;
    }
}