import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
    templateUrl: 'dropdown-list-demo.component.html'
})
export class DropdownListDemoComponent implements OnInit {

    public items;
    public textField;
    private valueField = 'value';
    public selectedItem = {
        "key": "0001",
        "value": "空調"
    };
    public selectedItemValue: string;
    
    constructor(private http: Http) {

    }
    ngOnInit() {

        this.http.get('http://test.his.cmuh.org.tw/webapi/drugCheckManager/getDepartments')
            .subscribe((res) => {
                this.items = res.json();
                this.textField = 'key';
            });

    }



}