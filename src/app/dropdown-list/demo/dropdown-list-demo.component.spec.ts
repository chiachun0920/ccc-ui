import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { DropdownListDemoComponent } from './dropdown-list-demo.component';
import { DropdownListDemoService } from './dropdown-list-demo.service';

describe('DropdownListDemoComponent', () => {

    let comp: DropdownListDemoComponent;
    let service : DropdownListDemoService;
    let fixture: ComponentFixture<DropdownListDemoComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        let DropdownListDemoServiceStub = {
            data: [{ text: 'NTUH', value: 'NTUH' }, { text: 'CMUH', value: 'CMUH' }]
        }
        TestBed.configureTestingModule({
            declarations: [DropdownListDemoComponent],
            providers: [{ provide: DropdownListDemoService, userValue: DropdownListDemoServiceStub }]
        });

        fixture = TestBed.createComponent(DropdownListDemoComponent);
        comp = fixture.componentInstance;

        service = fixture.debugElement.injector.get(DropdownListDemoService);
    })

})