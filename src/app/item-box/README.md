# Cmuh Item-Box

### 目錄

  - 簡介
  - 介面
  - 用法
  - 預覽圖
  
## 簡介

  提供一個介面，在多個Item裡搜尋、選取特定的Item。
  
## 介面

- 輸入:
    - keyName:string: key的欄位名，預設為'Key'。
    - valueName:string: value的欄位名，預設為'Value'。
    - height:string: item-box高度，預設為120px。
        - 　ex : [height]="'200px'" 
    - dataSource:Data: item-box的資料來源。
        -  ex : [dataSource] = [{key : "",value=""},{key:"",value=""}...]
- 輸出:
    - (focusItem):event選中時所觸發事件,回傳選中的Object。
    
## 用法
_module.ts_

```ts
import { ItemBoxModule } from '@cmuh/components';

@NgModule({
    delcarations:[],
    imports:[ ItemBoxModule ]
})
```

_template.html_

```html
<cmuh-item-box 
    (focusItem)="onFocusItem($event)" 
    [keyName]="keyName"
    [valueName]="valueName"
    [height]="height"
    [dataSource]="itemBoxDS">
</cmuh-item-box>
```
_component.ts_

```ts
import { ItemBoxDS } from '@cmuh/components';

class SomeComponent {

    private height:string = '200px';
    private keyName = '鍵值';
    private valueName = '內容';
    private itemBoxDS:ItemBoxDS[] = [
        { key: "", value: "" },
        { key: "01", value: "I" },
        { key: "02", value: "II" },
        { key: "03", value: "III" },
        { key: "04", value: "IV" },
        { key: "05", value: "V" },
        { key: "06", value: "VI" },
        { key: "07", value: "VII" },
        { key: "08", value: "VIII" },
        { key: "09", value: "IX" },
        { key: "10", value: "X" }
    ];

    private onFocusItem(data:ItemBoxDS):void {
      /*　do something ...*/
    }
}
```

## 預覽圖
![demo img](http://i.imgur.com/92i7ONj.png)
