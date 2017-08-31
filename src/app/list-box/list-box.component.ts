import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmuh-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.scss']
})
export class ListBoxComponent implements OnInit {

  @Input() dataSource: any[];
  @Input() textField: string;
  @Input() valueField: string;
  @Input() selectedItem: any[];
  public itemClick:boolean = false;
  public text:string="789";
  @Output() selectedItemChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

    this.textField = this.textField ? this.textField : 'text';
    this.valueField = this.valueField ? this.valueField : 'value';
    this.dataSource = this.dataSource ? this.dataSource : [];
    this.selectedItem = this.selectedItem ? this.selectedItem : [];
  }

  isActive(index: number): boolean {

    if (this.dataSource.length != 0)

      for (var i = 0; i < this.selectedItem.length; i++) {
        if (this.dataSource[index][this.textField] == this.selectedItem[i][this.textField]) {
          return true;
        }
      }
    return false;
  }

  toggle(index: number) {
    this.itemClick = true;
    if (this.dataSource.length != 0)
      if (this.isActive(index) == true) {
        for (var i = 0; i < this.selectedItem.length; i++) {
          if (this.selectedItem[i][this.textField] == this.dataSource[index][this.textField]) {
            this.selectedItem.splice(i, 1);
          }
        }
      } else {
        this.selectedItem.push(this.dataSource[index]);
      }
  }

}
