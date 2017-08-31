# Cmuh Search-Toolbar

### 目錄
  
  - 簡介
  - 介面
  - 用法
  - 預覽圖
  
## 簡介

**工具列容器，可以自己組裝想要的元件。**
  
## 介面

- 輸入:
    - 暫時為空。 

- 輸出:
    - event search : 當user按壓搜尋icon時產生。
    
## 用法

_template.html_

```sh

<cmuh-search-toolbar (search)="onSearch($event)">
    <button type="button" class="btn btn-default">Default</button>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-link">Link</button>
</cmuh-search-toolbar>

```
_component.ts_

```sh
class SomeComponent {

    private onSearch(searchString:string){
        /* do something... */
        console.log(searchString);
    }
}
```

## 預覽圖
![demo img](http://i.imgur.com/0w6omDO.png)

