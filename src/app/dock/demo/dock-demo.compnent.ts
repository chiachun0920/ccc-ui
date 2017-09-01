import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'dock-demo.component.html',
    styleUrls: ['dock-demo.component.scss']
})
export class DockDemoComponent implements OnInit {

    public appIcon = [
        { iconImg: '', title: 'app1' },
        { iconImg: '', title: 'app2' },
        { iconImg: '', title: 'app3' },
    ];
    onClickIcon(icon) {
        console.log(icon);
    }
    constructor() { }

    ngOnInit() { }

}