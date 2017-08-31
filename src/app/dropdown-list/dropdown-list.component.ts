import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
    selector: 'cmuh-dropdown-list',
    templateUrl: './dropdown-list.component.html',
    styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent implements OnInit {

    @Input() filterMode: boolean = true;
    @Input() dataSource: any;       //資料來源
    @Input() textField: string;     //顯示屬性
    @Input() valueField: string;    //資料屬性
    @Input() height: string;        //menu高度
    @Input() width: string;         //整體寬度
    @Input() buttonHeight: string;  //按鈕高度
    @Input() backgroundColor: string;  //按鈕背景顏色
    @Input() color: string;            //按鈕字體顏色
    @Input() selectedItem: any;     //被選取的物件
    @Input() defaultButtonName: string;
    @Output() selectedItemChange: EventEmitter<any> = new EventEmitter<any>();
    @Input() selectedItemValue: string;
    @Output() selectedItemValueChange: EventEmitter<any> = new EventEmitter<any>();

    @Input() ngModel;
    @Output() ngModelChange: EventEmitter<string> = new EventEmitter<string>();

    public filterText: string = '';
    public isOpen: boolean = false;


    /**
     * ng初始化 -- 初始變數 
     */
    ngOnInit() {

        this.dataSource = this.dataSource ? this.dataSource : [];
        this.textField = this.textField ? this.textField : 'text';
        this.valueField = this.valueField ? this.valueField : 'value';

        this.height = this.height ? this.height : '220px';
        this.width = this.width ? this.width : '300px';
        this.buttonHeight = this.buttonHeight ? this.buttonHeight : '33.6px';

        this.color = this.color ? this.color : '';
        this.backgroundColor = this.backgroundColor ? this.backgroundColor : '';

        //this.selectedItem = null;
    }
    /**
     * 選取物件事件觸發
     * @param {number} index
     */
    private selectItem(index: number): void {

        this.selectedItem = this.dataSource[index];
        this.selectedItemChange.emit(this.dataSource[index]);
        this.selectedItemValueChange.emit(this.dataSource[index][this.valueField]);
        this.ngModelChange.emit(this.dataSource[index][this.valueField])
    }
    /**
     * 過濾是否顯示
     * @param {string} con 過濾條件
     * @param {string} item 比較物件
     * @returns {boolean}
     */
    private filter(con: string, item: string): boolean {
        if (item.toLowerCase().indexOf(con.toLowerCase()) > -1) {
            return true;
        }
        return false;
    }
    /**
     * 切換開關
     */
    private toggle() {
        this.isOpen = !this.isOpen;
    }
    /**
     * 開啟
     */
    private open() {
        this.isOpen = true;
    }

    /**
     * 關閉
     */
    private close() {

        this.isOpen = false;
    }

    /**
     * 標記是否顯示(被選擇)
     */
    private isActivated(index: number): boolean {

        if (this.dataSource.length != 0 && this.selectedItem != null) {
            if (this.dataSource[index][this.textField] == this.selectedItem[this.textField]) {
                return true;
            } else {
                return false;
            }
        }
        else {
            return false;
        }
    }

    @HostListener('document:click', ['$event'])
    handleMouseEvent(event: MouseEvent) {
        let tagName = event.toElement.tagName.toLowerCase();
        if (tagName !== "li" && tagName !== "button" && tagName !== "input") this.isOpen = false;
    }
}