import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ItemBoxDS } from './models';

@Component({
    selector: 'cmuh-item-box',
    templateUrl: './item-box.component.html',
    styleUrls: ['./item-box.component.scss']
})
export class ItemBoxComponent implements OnInit {

    @Input() keyName: string;
    @Input() valueName: string;
    @Input() dataSource: ItemBoxDS[];
    @Input() height: string;
    @Output() focusItem: EventEmitter<ItemBoxDS>;

    private tableOfSelected: boolean[] = [];

    constructor() {

        this.focusItem = new EventEmitter<ItemBoxDS>();
    }

    ngOnInit() {

        this.dataSource = this.dataSource ? this.dataSource : [];
        this.height = this.height ? this.height : '120px';
        this.keyName = this.keyName ? this.keyName : 'Key';
        this.valueName = this.valueName ? this.valueName : 'Value';
        this.dataSource.sort((a, b) => {
            return a.key > b.key ? 1 : -1;
        });

        this.tableOfSelected[0] = true;
        for (var i = 1; i < this.dataSource.length; i++) {
            this.tableOfSelected[i] = false;
        }
    }
    /**
     * 取得item在dataSource的index
     * @param {Data} item
     * @returns {number}
     */
    private getIndexOfItem(item: ItemBoxDS): number {

        var l: number = 0, u = this.dataSource.length - 1;
        var m: number = Math.round((l + u) / 2);
        while (true) {
            if (item.key > this.dataSource[m].key) {
                l = m + 1;
                m = Math.round((l + u) / 2);
            }
            else if (item.key < this.dataSource[m].key) {
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
    private isItemSelected(item: ItemBoxDS): boolean {

        return this.tableOfSelected[this.getIndexOfItem(item)];
    }
    /**
     * 滑鼠點擊選取item
     * @param {Data} item
     * @returns {void}
     */
    private selectItem(item: ItemBoxDS): void {

        this.setItemSelected(this.getIndexOfItem(item));

    }

    /**
     * 將table of selected設為true
     * @param {number} index index of dataSource
     * @returns {void}
     */
    private setItemSelected(index: number): void {

        for (var i = 0; i < this.dataSource.length; i++) {
            if (i != index) {
                this.tableOfSelected[i] = false;
            } else {
                this.tableOfSelected[i] = true;
                this.focusItem.emit(this.dataSource[i]);
            }
        }
    }

    /**
     * 搜尋Item
     * @param {string} searchText
     */
    private searchItem(searchText: string): void {

        for (var i = 0; i < this.dataSource.length; i++) {
            if (this.dataSource[i].key.indexOf(searchText.toUpperCase()) > -1 ||
                this.dataSource[i].value.indexOf(searchText.toUpperCase()) > -1) {
                this.setItemSelected(i);
                document.getElementById(this.dataSource[i].key ? this.dataSource[i].key : 'empty').scrollIntoView();
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
                document.getElementById(this.dataSource[currentSelectedIndex - 1].key ? this.dataSource[currentSelectedIndex - 1].key : 'empty').focus();

            }
        }
        if (event.keyCode == 40) {
            var currentSelectedIndex = this.getIndexOfSelectedItem();
            if (currentSelectedIndex + 1 < this.dataSource.length) {
                this.setItemSelected(currentSelectedIndex + 1);
                document.getElementById(this.dataSource[currentSelectedIndex + 1].key ? this.dataSource[currentSelectedIndex + 1].key : 'empty').focus();
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
