# Cmuh Format-TextArea

### 目錄

  - 簡介
  - 介面
  - 用法
  - 預覽圖
  
## 簡介

  一個動態格式化的textarea，自動編譯出自定義變數，
  並顯示動態資料。
  
## 介面

- 輸入:
    - rawData : string: 初始原始資料。

- 輸出:
    - (compiledData):CompiledData：編譯過後的物件，包括原始資料、顯示資料及變數群。
    
## 用法
_module.ts_

```ts
import { FormatTextAreaModule } from '@cmuh/components';

@NgModule({
    delcarations:[],
    imports:[ FormatTextAreaModule ]
})
```

_template.html_

```html
<cmuh-format-textarea
    [rawData]="rawData"
    (updateResult)="onUpdateResult($event)"
></cmuh-format-textarea>
```
_component.ts_

```ts
import { CompiledData } from '@cmuh/components';

class SomeComponent {

    public result:CompiledData;
    public rawData = `I am [name](jenny)\nI am [age](18) years old`;

    onUpdateResult(result) {

        this.result = result;
    }

    private onFocusItem(data:ItemBoxDS):void {
      /*　do something ...*/
    }
}
```

## 預覽圖
![demo img](http://i.imgur.com/fzCX76A.png)
