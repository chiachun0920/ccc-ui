import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ItemBoxPair } from './models';

@Component({
    selector: 'ccc-item-box',
    templateUrl: './item-box.component.html',
    styleUrls: ['./item-box.component.scss']
})
export class ItemBoxComponent implements OnInit {

    @Input() keyName: string;
    @Input() valueName: string;
    @Input() itemBoxPairs: ItemBoxPair[];
    @Input() height: string;
    @Output() pairFocus: EventEmitter<ItemBoxPair>;

    private tableOfSelected: boolean[] = [];

    constructor() {

        this.pairFocus = new EventEmitter<ItemBoxPair>();
    }

    ngOnInit() {

        this.itemBoxPairs = this.itemBoxPairs ? this.itemBoxPairs : [];
        this.height = this.height ? this.height : '120px';
        this.keyName = this.keyName ? this.keyName : 'Key';
        this.valueName = this.valueName ? this.valueName : 'Value';
        this.itemBoxPairs.sort((a, b) => {
            return a.key > b.key ? 1 : -1;
        });

        this.tableOfSelected[0] = true;
        for (var i = 1; i < this.itemBoxPairs.length; i++) {
            this.tableOfSelected[i] = false;
        }
    }
    /**
     * 取得item在dataSource的index
     * @param {Data} item
     * @returns {number}
     */
    private getIndexOfItem(item: ItemBoxPair): number {

        var l: number = 0, u = this.itemBoxPairs.length - 1;
        var m: number = Math.round((l + u) / 2);
        while (true) {
            if (item.key > this.itemBoxPairs[m].key) {
                l = m + 1;
                m = Math.round((l + u) / 2);
            }
            else if (item.key < this.itemBoxPairs[m].key) {
                u = m - 1;
                m = Math.round((l + u) / 2);
            }
            else {
                return m;
            }
        }
    }
    /**
     * 取得現在被選取的item index
     * @returns {number}
     */
    private getIndexOfSelectedItem(): number {

        for (var i = 0; i < this.tableOfSelected.length; i++) {
            if (this.tableOfSelected[i] == true) {
                return i;
            }
        }
        return -1;
    }
    /**
     * 是否item當下是被選取的
     * @param {Data} item
     * @returns {boolean}
     */
    private isItemSelected(item: ItemBoxPair): boolean {

        return this.tableOfSelected[this.getIndexOfItem(item)];
    }
    /**
     * 滑鼠點擊選取item
     * @param {Data} item
     * @returns {void}
     */
    private selectItem(item: ItemBoxPair): void {

        this.setItemSelected(this.getIndexOfItem(item));

    }

    /**
     * 將table of selected設為true
     * @param {number} index index of dataSource
     * @returns {void}
     */
    private setItemSelected(index: number): void {

        for (var i = 0; i < this.itemBoxPairs.length; i++) {
            if (i != index) {
                this.tableOfSelected[i] = false;
            } else {
                this.tableOfSelected[i] = true;
                this.pairFocus.emit(this.itemBoxPairs[i]);
            }
        }
    }

    /**
     * 搜尋Item
     * @param {string} searchText
     */
    private searchItem(searchText: string): void {

        for (var i = 0; i < this.itemBoxPairs.length; i++) {
            if (this.itemBoxPairs[i].key.indexOf(searchText.toUpperCase()) > -1 ||
                this.itemBoxPairs[i].value.indexOf(searchText.toUpperCase()) > -1) {
                this.setItemSelected(i);
                document.getElementById(this.itemBoxPairs[i].key ? this.itemBoxPairs[i].key : 'empty').scrollIntoView();
                break;
            }
        }
    }
    /**
     * 處理鍵盤事件
     */
    @HostListener('keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.keyCode == 38) {
            var currentSelectedIndex = this.getIndexOfSelectedItem();
            if (currentSelectedIndex - 1 >= 0) {
                this.setItemSelected(currentSelectedIndex - 1);
                document.getElementById(this.itemBoxPairs[currentSelectedIndex - 1].key ? this.itemBoxPairs[currentSelectedIndex - 1].key : 'empty').focus();

            }
        }
        if (event.keyCode == 40) {
            var currentSelectedIndex = this.getIndexOfSelectedItem();
            if (currentSelectedIndex + 1 < this.itemBoxPairs.length) {
                this.setItemSelected(currentSelectedIndex + 1);
                document.getElementById(this.itemBoxPairs[currentSelectedIndex + 1].key ? this.itemBoxPairs[currentSelectedIndex + 1].key : 'empty').focus();
            }
        }
    }
    /**
     * 受到user的滑鼠關注
     * @returns {void}
     */
    private focus(): void {
        document.getElementById("search").focus();
    }
}
