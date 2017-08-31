# Cmuh DropDown-List

### 目錄

  - 簡介
  - 介面
  - 用法
  - 預覽圖
  
## 簡介

  下拉式選單
  
## 介面

- 輸入:
    - height:string: dropdown-list menu的高度。
        -  ex : [height] = "'120px'"
    - textField:string: item第一個欄位名(預設顯示)
    - valueField:string: item第二個欄位名
    - dataSource:Item: dropdown-list的資料來源。
        -  ex : [dataSource] = [{key : "",value=""},{key:"",value=""}...]
    
- 雙向綁定:
    - [(selectedItem)]: 選中的item物件，同時也是預設顯示的物件。
    
## 用法
_module.ts_

```ts
import { DropDownListModule } from '@cmuh/components';

@NgModule({
    delcarations:[],
    imports:[ DropDownListModule ]
})
```

_template.html_

```html
<cmuh-dropdown-list 
    [height]="height" 
    [textField]="textField"
    [valueField]="valueField"
    [dataSource]="items"
    [(selectedItem)]="selectedItem"></cmuh-dropdown-list>
```
_component.ts_

```ts

class SomeComponent {

    private height:string = '200px';
    private textField:string = 'key';
    private valueField:string = 'value';
    private selectedItem;

    private items = [
        { key: 'CTI', value: '胃腸' },
        { key: 'HB', value: '肝膽' },
        { key: 'CV', value: '心臟' },
        { key: 'CHEST', value: '胸腔' },
        { key: 'NEPHRO', value: '腎臟' },
        { key: 'ENDO', value: '內分泌' },
        { key: 'HEME', value: '血液腫瘤' }
    ];

}
```

## 預覽圖
![demo img](http://i.imgur.com/tDkwVDy.png)
