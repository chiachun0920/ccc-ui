import { Component, OnInit } from '@angular/core';
import { ItemBoxPair } from '../models';

@Component({
    templateUrl: 'item-box-demo.component.html'
})
export class ItemBoxDemoComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }
    public height: string = '200px';
    public keyName = '鍵值';
    public valueName = '內容';
    public data: ItemBoxPair;
    public itemBoxPairs: ItemBoxPair[] = [
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

    private onPairFocus(data: ItemBoxPair): void {
        /*　do something ...*/
        this.data = data;
    }
}