import { DropdownListDemoService } from './dropdown-list-demo.service';

describe('DropdownListDemoService', () => {
    let service: DropdownListDemoService;

    beforeEach(() => {
        service = new DropdownListDemoService();
    })

    it('getData should return example data', () => {
        expect(JSON.stringify(service.getSyncData())).toBe(JSON.stringify([
            { text: 'NTUH', value: 'NTUH' },
            { text: 'CMUH', value: 'CMUH' }
        ]));
    });

    it('getAsyncData should return async data', done => {
        service.getAsyncData().then((data) => {
            expect(JSON.stringify(data)).toBe(JSON.stringify([
                { text: 'NTUH', value: 'NTUH' },
                { text: 'CMUH', value: 'CMUH' }
            ]));
            done();
        })
    });
    it('getAsyncSlowlyData test', done => {
        service.getSlowlyAsyncData().then((data) => {
            expect(JSON.stringify(data)).toBe(JSON.stringify([
                { text: 'NTUH', value: 'NTUH' },
                { text: 'CMUH', value: 'CMUH' }
            ]));
            done();
        })
        
    })
    it('getAsyncSlowlyData test', done => {
        service.getObservableData().subscribe((data) => {
            expect(JSON.stringify(data)).toBe(JSON.stringify([
                { text: 'NTUH', value: 'NTUH' },
                { text: 'CMUH', value: 'CMUH' }
            ]));
            done();
        })
        
    })
}); 