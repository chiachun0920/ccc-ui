import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
@Injectable()
export class DropdownListDemoService {


    constructor() { }

    getSyncData() {
        return [
            { text: 'NTUH', value: 'NTUH' },
            { text: 'CMUH', value: 'CMUH' }
        ]
    }
    getAsyncData(): Promise<any[]> {

        return Promise.resolve([
            { text: 'NTUH', value: 'NTUH' },
            { text: 'CMUH', value: 'CMUH' }
        ]);
    }
    getSlowlyAsyncData(): Promise<any[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getAsyncData()), 1000);
        });
    }
    getObservableData(): Observable<any[]> {
        return Observable.of([
            { text: 'NTUH', value: 'NTUH' },
            { text: 'CMUH', value: 'CMUH' }
        ]).delay(10);
    }


}