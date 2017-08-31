import { Component, OnInit, Input, Output, EventEmitter, HostListener,ViewChild } from '@angular/core';
import { ListBoxComponent } from '../list-box/list-box.component';

@Component({
  selector: 'ccc-dropdown-list-box',
  templateUrl: './dropdown-list-box.component.html',
  styleUrls: ['./dropdown-list-box.component.scss']
})
export class DropdownListBoxComponent implements OnInit {

  @Input() textField: string;
  @Input() valueField: string;
  @Input() buttonName: string;
  @Input() dataSource: any[];

  @Input() selectedItem: any[];
  @Output() selectedItemChange: EventEmitter<any> = new EventEmitter();

  @ViewChild(ListBoxComponent) 
  private listBoxComponent:ListBoxComponent;

  public selfClick: boolean = false;
  public isOpen: boolean = false;
  constructor() { }

  ngOnInit() {

    this.textField = this.textField ? this.textField : 'text';
    this.valueField = this.valueField ? this.valueField : 'value';
    this.dataSource = this.dataSource ? this.dataSource : [];
    this.selectedItem = this.selectedItem ? this.selectedItem : [];
  }

  toggle() {
    this.selfClick = true;
    this.isOpen = !this.isOpen;

  }
  /**
 * 處理鍵盤事件:keydown
 */
  @HostListener('document:click', ['$event'])
  handleMouseEvent(event: MouseEvent) {
    if (event.button == 0) {
      if (!this.selfClick&&!this.listBoxComponent.itemClick) {
        this.isOpen = false;
      }
      this.selfClick = false;
      this.listBoxComponent.itemClick = false;

    }
  }

}
