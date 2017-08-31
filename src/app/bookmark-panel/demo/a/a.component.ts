import { Component } from '@angular/core';
import { Subject } from "rxjs/Rx";
import { PanelBarComp } from "../../model/panel-bar-comp";
import { ShareService } from "./share";
@Component({
    templateUrl: 'a.component.html'
})
export class AComponent implements PanelBarComp {
    // public formSubject;
    public formSubject: Subject<any> = new Subject<any>();
    public form = {
        name: 'chaichun'
    }
    constructor(private s: ShareService) { }

    ngOnInit() {

    }
    onClick() {
        this.formSubject.next(this.form);
        this.s.formSubject.next(JSON.parse(JSON.stringify(this.form)));
    }
    changeFormName() {
        this.form.name = 'Iris';
    }
}