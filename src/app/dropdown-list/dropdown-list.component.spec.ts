import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DropdownListComponent } from './dropdown-list.component';



describe('DropdownListComponent', () => {

    let comp: DropdownListComponent;
    let fixture: ComponentFixture<DropdownListComponent>;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(async(() => {

        console.log('async start...');
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [DropdownListComponent]
        }).compileComponents().then(() => {
            console.log('async finished.');
        });
    }));

    beforeEach(() => {

        console.log('sync start...');
        fixture = TestBed.createComponent(DropdownListComponent);
        comp = fixture.componentInstance;
    });

    it('should display selected item name if selected has value', () => {

        de = fixture.debugElement.query(By.css('.ccc-btn'));
        el = de.nativeElement;

        comp.selectedItem = { text: '台大醫院', value: 'NTU Hostipal' };

        fixture.detectChanges();

        expect(el.textContent).toContain('台大醫院', 'selectedItem name');
    });
    it('should display non-selected if selectedItem is null', () => {

        de = fixture.debugElement.query(By.css('.ccc-btn'));
        el = de.nativeElement;
        comp.selectedItem = '';
        fixture.detectChanges();

        expect(el.textContent).toContain('non-selected');
    });

    it('should display menu items if dataSource has items', () => {

        comp.isOpen = true;
        comp.selectedItem = { text: '台大醫院', value: 'NTU Hostipal' };
        comp.dataSource = [
            { text: '台大醫院', value: 'NTU Hostipal' },
            { text: '中國附醫', value: 'CMUH' }
        ];
        fixture.detectChanges();
        let des: DebugElement[];
        des = fixture.debugElement.queryAll(By.css('a'));
        el = des[1].nativeElement;
        expect(el.textContent).toContain('中國附醫');
        expect(des[0].nativeElement.textContent).toContain('台大醫院');
    });

    it('should display the items about with filter text', () => {

        comp.isOpen = true;
        comp.dataSource = [
            { text: '台大醫院', value: 'NTU Hostipal' },
            { text: '中國附醫', value: 'CMUH' }
        ];
        comp.filterText = '台';
        fixture.detectChanges();

        de = fixture.debugElement.query(By.css('a'));
        el = de.nativeElement;

        expect(el.textContent).toContain('台大醫院');
    });

    it('should display the items about with the filterText', () => {

        comp.isOpen = true;
        comp.dataSource = [
            { text: '台大醫院', value: 'NTUH' },
            { text: '中國附醫', value: 'CMUH' }
        ];

        comp.filterText = '醫';
        fixture.detectChanges();
        let des: DebugElement[];
        des = fixture.debugElement.queryAll(By.css('a'));

        expect(des[0].nativeElement.textContent).toContain('台大醫院');
        expect(des[1].nativeElement.textContent).toContain('中國附醫');
    });

    it('should item which is highlighted when selectedItem has value', () => {

        comp.isOpen = true;
        comp.selectedItem = { text: '台大醫院', value: 'NTUH' };
        comp.dataSource = [
            { text: '台大醫院', value: 'NTUH' },
            { text: '中國附醫', value: 'CMUH' }
        ];
        fixture.detectChanges();
    });

    it('simulate the property binding about dataSource', () => {

        let options = [
            { text: '台大醫院', value: 'NTUH' },
            { text: '中國附醫', value: 'CMUH' }
        ];
        comp.dataSource = options;
        comp.isOpen = true;
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('a'));
        el = de.nativeElement;

        expect(el.textContent).toContain(options[0].text);
    });
    it('should raised selected event when clicked', () => {

        let options = [
            { text: '台大醫院', value: 'NTUH' },
            { text: '中國附醫', value: 'CMUH' }
        ];
        let selectedItem;

        comp.dataSource = options;
        comp.isOpen = true;
        comp.selectedItemChange.subscribe((item) => {

            console.log('handle click event');
            selectedItem = item;
            comp.selectedItem = item;
            comp.isOpen = true;
            fixture.detectChanges();

        });

        fixture.detectChanges();

        de = fixture.debugElement.query(By.css('a'));
        console.log('trigger click event');
        de.triggerEventHandler('click', null);

        expect(selectedItem.text).toBe(options[0].text);
    })




})
describe('DropDownList component inside a test host component',()=>{
    let testHost:TestHostComponent;
    let tFixture:ComponentFixture<TestHostComponent>;
    let dFixture:ComponentFixture<DropdownListComponent>;
    let de : DebugElement;

    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            imports:[FormsModule],
            declarations:[DropdownListComponent,TestHostComponent]
        }).compileComponents();
    }));

    beforeEach(()=>{
        
        tFixture = TestBed.createComponent(TestHostComponent);
        // dFixture = TestBed.createComponent(DropdownListComponent);

        testHost = tFixture.componentInstance;
        testHost.dropdown.isOpen = true;
        tFixture.detectChanges();
        de = tFixture.debugElement.query(By.css('a'));
        
    });

    it('should display first item',()=>{

        expect(de.nativeElement.textContent).toBe('台大醫院');
    })
})
import { Component,ViewChild } from '@angular/core';

@Component({
    template: `
        <cmuh-dropdown-list 
            [dataSource]="options"
            [(selectedItem)]="selectedItem"></cmuh-dropdown-list>`,
})
class TestHostComponent { 
    @ViewChild(DropdownListComponent) public dropdown:DropdownListComponent;
    private options = [
        { text: '台大醫院', value: 'NTUH' },
        { text: '中國附醫', value: 'CMUH' }
    ];
    private selectedItem = { text: '台大醫院', value: 'NTUH' };
    private selectedItemChangeHandler(){

    }
}