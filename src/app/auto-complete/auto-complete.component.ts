import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'cmuh-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  @Input() suggestions: string[];                     // 建議清單的資料依據(來源)
  @Input() height: string;
  @Output() resultUpdate: EventEmitter<string>;      // result發生改變時觸發的事件

  private result: string;                            // 輸入框文字
  private suggestion: string[];                      // 自動建議清單
  private isShowSuggestion: boolean = false;         // 是否顯示建議清單
  private tableOfHighlighted: boolean[];             // table存放是否highlighted的flag

  constructor() {

    this.resultUpdate = new EventEmitter<string>();
  }

  /**
   * Angular初始化函式
   */
  ngOnInit() {

    this.suggestions = this.suggestions ? this.suggestions : [];
    this.height = this.height ? this.height : '300px';
  }

  /**
   * 選取建議的文字完成輸入，
   * 點擊建議清單觸發
   * @param {string} item 
   * @returns {void}
   */
  private autoComplete(item: string): void {

    this.result = item;
    this.closeSuggestion();
    this.resultUpdate.emit(item);
  }

  /**
   * 關閉建議清單
   * @returns {void}
   */
  private closeSuggestion(): void {

    this.isShowSuggestion = false;
    this.suggestion = [];
  }
  /**
   * 從datasource找尋符合輸入的結果
   * 並製作建議清單顯示出來
   * @param {string} resultInput
   * @returns {void}
   */
  private findResult(resultInput: string): void {

    this.resultUpdate.emit(resultInput);
    if (resultInput != '') {
      this.suggestion = [];
      for (var i = 0; i < this.suggestions.length; i++) {
        if (this.suggestions[i].toLowerCase().indexOf(resultInput.toLowerCase()) == 0) {
          if (!this.isShowSuggestion)
            this.isShowSuggestion = true;
          this.suggestion.push(this.suggestions[i]);
        }
      }
      this.tableOfHighlighted = [];
      for (var i = 0; i < this.suggestion.length; i++) {
        this.tableOfHighlighted[i] = false;
      }
    } else {
      this.closeSuggestion();
    }
  }
  /**
   * 取得item在suggestion裡的index
   * @param {string} item
   * @returns {number}
   */
  private getIndexOfItem(item: string): number {

    for (var i = 0; i < this.suggestion.length; i++) {
      if (item == this.suggestion[i]) {
        return i;
      }
    }
    return -1;
  }
  /**
   * 取得目前highlighted item在suggestion裡的index
   * @returns {number}
   */
  private getIndexOfHighlightedItem(): number {

    for (var i = 0; i < this.suggestion.length; i++) {
      if (this.tableOfHighlighted[i])
        return i;
    }
    return -1;
  }
  /**
   * 將某個在suggestion裡的item標示為highlighted
   * @param {string} item
   * @returns {void}
   */
  private highlight(index: number): void {

    this.setTableOfHighlighted(index);
  }
  /**
   * 特定item是否標記為highlighted
   * @param {string} item
   * @returns {boolean}
   */
  private isHighlighted(index: number): boolean {

    return this.tableOfHighlighted[index];
  }

  /**
   * 將suggestion裡位置為index的元素標示為highlighted(true)
   * @param {number} index
   * @returns {void}
   */
  private setTableOfHighlighted(index: number): void {

    for (var i = 0; i < this.suggestion.length; i++) {
      if (i != index) {
        this.tableOfHighlighted[i] = false;
      } else {
        this.tableOfHighlighted[i] = true;
      }
    }
  }


  /**
   * 處理鍵盤事件:keydown
   */
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.isShowSuggestion) {
      if (event.keyCode == 38) {

        var currentSelectedIndex = this.getIndexOfHighlightedItem();
        if (currentSelectedIndex - 1 >= 0) {
          this.setTableOfHighlighted(currentSelectedIndex - 1);
          document.getElementById(this.suggestion[currentSelectedIndex - 1]).focus();
        }
      }
      if (event.keyCode == 40) {

        var currentSelectedIndex = this.getIndexOfHighlightedItem();
        if (currentSelectedIndex + 1 < this.suggestion.length) {
          this.setTableOfHighlighted(currentSelectedIndex + 1);
          document.getElementById(this.suggestion[currentSelectedIndex + 1]).focus();
        }
      }
      if (event.keyCode == 13) {
        this.result = this.suggestion[this.getIndexOfHighlightedItem()];
        this.resultUpdate.emit(this.result);
        this.closeSuggestion();
      }
    }
  }

  /**
   * 處理鍵盤事件:keydown
   */
  @HostListener('document:click', ['$event'])
  handleMouseEvent(event: MouseEvent) {
    if (event.button == 0) {
      this.closeSuggestion();
    }
  }
}
