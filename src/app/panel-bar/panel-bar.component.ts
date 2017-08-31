import { Component, OnInit, Input, OnChanges, EventEmitter } from '@angular/core';
import * as Lodash from 'lodash';
import { PanelBarItem } from "./model";
@Component({
  selector: 'ccc-panel-bar',
  templateUrl: './panel-bar.component.html',
  styleUrls: ['./panel-bar.component.css']
})
export class PanelBarComponent implements OnInit, OnChanges {

  @Input() items: PanelBarItem[];
  /**true? filter open: filter close */
  @Input() filterMode: boolean;

  /**Filter keyword */
  public keyword: string = '';
  /**Items filtered by keyword*/
  public filteredItems: PanelBarItem[];
  private timer;

  constructor() { }
  /**
   * ngOnChanges
   */
  ngOnChanges() {

    this.filteredItems = Lodash.cloneDeep(this.items)
  }
  /**
   * ngOnInit
   */
  ngOnInit() {

    this.initVariables();
  }
  /**
   * init variables
   */
  public initVariables() {

    this.items = this.items ? this.items : [];
    this.filterMode = this.filterMode ? this.filterMode : false;
  }
  /**
   * input event
   * @param $event 
   */
  public onInput($event) {

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.filteredItems = Lodash.cloneDeep(this.items)
      this.filter(this.filteredItems);
      this.refactor(this.filteredItems);
    }, 500);
  }
  /**
   * select event
   * @param event 
   */
  public onSelect(event) {

    this.clearSelect(this.filteredItems);
  }
  /**
   * filter items
   * @param {PanelBarItem[]} items 
   */
  public filter(items: PanelBarItem[]) {

    let itr = 0;
    while (items[itr] != null) {

      if (items[itr].child) {
        items[itr].expand = true;
        this.filter(items[itr].child);
        itr++;
      } else {
        if (items[itr].title.indexOf(this.keyword) < 0) {
          items.splice(itr, 1);
        } else {
          itr++;
        }
      }
    }
  }
  /**
   * refactor items to clear empty child
   * @param {PanelBarItem[]} items 
   */
  public refactor(items: PanelBarItem[]) {

    let itr = 0;
    while (items[itr] != null) {
      if (items[itr].child && items[itr].child.length != 0) {
        this.refactor(items[itr].child)
        itr++;
      } else if (items[itr].child && items[itr].child.length == 0) {
        items.splice(itr, 1);
      } else {
        itr++;
      }
    }
    /** */
    itr = 0;
    while (items[itr] != null) {
      if (items[itr].child && items[itr].child.length == 0) {
        items.splice(itr, 1);
      } else {
        itr++;
      }
    }
  }
  /**
   * Clear isSelect attrib.(make false) of items
   * @param {PanelBarItem[]} items 
   */
  public clearSelect(items: PanelBarItem[]) {

    for (let i = 0; i < items.length; i++) {
      if (items[i].child) {
        this.clearSelect(items[i].child);
      } else {
        items[i].isSelect = false;
      }
    }
  }
}