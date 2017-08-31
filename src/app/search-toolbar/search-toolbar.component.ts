import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmuh-search-toolbar',
  templateUrl: './search-toolbar.component.html',
  styleUrls: ['./search-toolbar.component.scss']
})
export class SearchToolbarComponent implements OnInit {

  @Output() search: EventEmitter<string>;
  @Input() public placeholder: string;
  constructor() {
    this.search = new EventEmitter<string>();
  }

  ngOnInit() { }
  /**
   * 按下搜尋圖示
   * @param {string} searchString
   * @returns {void}
   */
  private clickSearchButton(searchString: string): void {
    this.search.emit(searchString);
  }

}
