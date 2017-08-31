import { Component, OnInit, ViewChild} from '@angular/core';
import { ShareService } from "./a/share";
import { PanelBarTab } from "../";
import { AComponent } from "./a/a.component";
import { Observable } from "rxjs/Rx";

@Component({
    templateUrl: 'bookmark-panel-demo.component.html'
})
export class BookmarkPanelDemoComponent implements OnInit {

    private rTabs: PanelBarTab[];
    private lTabs: PanelBarTab[];

    constructor(private s: ShareService) {    }

    ngOnInit() {
        this.rTabs = [
            { component: AComponent, name: '右邊欄一', icon: 'fa fa-medkit' },
            { component: AComponent, name: '右邊欄二', icon: 'fa fa-user-md' },
            { component: AComponent, name: '右邊欄三', icon: 'fa fa-ambulance' },
        ]
        this.lTabs = [
            { component: AComponent, name: '左邊欄一', icon: 'fa fa-medkit' },
            { component: AComponent, name: '左邊欄二', icon: 'fa fa-user-md' },
            { component: AComponent, name: '左邊欄三', icon: 'fa fa-ambulance' },
        ]
    }
}