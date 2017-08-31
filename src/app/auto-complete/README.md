# Cmuh Auto-Complete

### 目錄
  
  - 簡介
  - 介面
  - 用法
  - 預覽圖
  
## 簡介

  提供一個介面，輔助建議，自動完成輸入。
  
## 介面

- 輸入:
    - string[] dataSource : 資料來源。
    - string height : 高度。 
- 輸出:
    - event updateResoult : 當result更新的時候所觸發的事件。
    
## 用法

template.html

```sh
<cmuh-auto-complete 
    (updateResult)="onUpdateResult($event)"
    [dataSource]="suggestion"
    [height]="height">
</cmuh-auto-complete>
```
component.ts

```sh
class SomeComponent {
    private height = "120px";
    private suggestion:string[] = [
        'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas, The',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegovina',
        'Botswana',
        'Brazil',
        'Brunei',
        'Bulgaria',
        'Burkina Faso',
        'Burma',
        'Burundi'
    ];
    private onUpdateResult(result:string):void {
      /*　do something ...*/
    }
}
```

## 預覽圖
![demo img](http://i.imgur.com/zcTk5XC.png)

