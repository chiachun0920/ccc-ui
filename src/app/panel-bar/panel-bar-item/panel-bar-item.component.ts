import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PanelBarItem } from "../model";
@Component({
  selector: 'ccc-panel-bar-item',
  templateUrl: './panel-bar-item.component.html',
  styleUrls: ['./panel-bar-item.component.css']
})
export class PanelBarItemComponent implements OnInit {

  @Input() items;
  @Output() select: EventEmitter<string>
  private selectedItem;

  constructor() {
    this.select = new EventEmitter<string>();
  }
  ngOnInit() {

    this.items = this.items ? this.items : [];
  }
  /**
   * click item event
   * @param {PanelBarItem} item 
   */
  public onClick($event) {

    this.clickItem($event);
  }
  /**
   * select item event
   * @param event 
   */
  public onSelect(event) {

    this.select.emit('select');
  }
  /**
   * click panel-bar item
   * @param item 
   */
  public clickItem(item: PanelBarItem) {

    this.toggleItem(item);
    this.execItemCommand(item);
    this.select.emit('select');
    if (!item.child) {
      item.isSelect = true;
    }
  }
  /**
   * toggle panel-bar item
   * @param {PanelBarItem} item
   */
  public toggleItem(item: PanelBarItem) {

    if (item.child) {
      item.expand = !item.expand;
    }
  }
  /**
   * execute panel-bar item command
   * @param {PanelBarItem} item
   */
  public execItemCommand(item: PanelBarItem) {

    if (item.command) {
      item.command();
    }
  }
  /**
   * Is item highlighted
   * @param {PanelBarItem} item
   */
  public isHt(item: PanelBarItem): boolean {

    return item.isSelect;
  }
}