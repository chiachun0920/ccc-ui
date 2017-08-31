# Panel-Bar

### 目錄
  
  - 簡介
  - 介面
  - 用法
  - 預覽圖
  
## 簡介

  雙側邊欄面板。
  
## 介面

- 輸入:
    - PanelBarTab lTabs : 左側邊欄資料來源。
    - PanelBarTab rTans : 右側邊欄資料來源。
- 輸出:    
    
## 用法

module.ts

```ts
import { PanelBarModule } from '@ccc/ui';

import { AModule } from 'path/a.module';
import { BModule } from 'path/b.module';

import { AComponent } from 'path/a.component';
import { BComponent } from 'path/b.component';
...
@NgModule({
    imports: [
        PanelBarModule,
        AModule,
        BModule
    ],
    ...
    entryComponent: [
        AComponent,
        BComponent
    ]
})

```
component.ts

```ts
import { PanelBarTab } from '@ccc/ui';
import { AComponent } from 'path/a.component';
import { BComponent } from 'path/b.component';

class SomeComponent {

    public rTabs = [
        { component: AComponent, name: '右邊欄一', icon: 'fa fa-medkit' },
        { component: AComponent, name: '右邊欄二', icon: 'fa fa-user-md' },
        { component: AComponent, name: '右邊欄三', icon: 'fa fa-ambulance' },
    ]
    public lTabs = [
        { component: AComponent, name: '左邊欄一', icon: 'fa fa-medkit' },
        { component: AComponent, name: '左邊欄二', icon: 'fa fa-user-md' },
        { component: AComponent, name: '左邊欄三', icon: 'fa fa-ambulance' },
    ]
}
```
template.html

```html
<ccc-panel-bar
    [rTabs]="rTabs"
    [lTabs]="lTabs">
</ccc-panel-bar>
```


## 預覽圖
![demo img]()