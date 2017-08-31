import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Rx";
@Injectable()
export class ShareService {

    public formSubject: Subject<any>;
    constructor() {
        this.formSubject = new Subject<any>();
    }

}