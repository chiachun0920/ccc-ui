import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'search-toolbar-demo.component.html'
})
export class SearchToolbarDemoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    private onSearch(searchString: string) {
        /* do something... */
        console.log(searchString);
        alert(`送出查詢${searchString}`);
    }
}