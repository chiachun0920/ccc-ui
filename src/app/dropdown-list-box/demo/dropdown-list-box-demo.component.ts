import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'dropdown-list-box-demo.component.html'
})
export class DropdownListBoxDemoComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

    dataSource = [
        { text: 'Newyork', value: 'Newyork' },
        { text: 'Taiwan', value: 'Taiwan' },
        { text: 'China', value: 'China' },
        { text: 'Japan', value: 'Japan' }
    ]

}