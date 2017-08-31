import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemBoxModule } from '../';

import { ItemBoxDemoComponent } from './item-box-demo.component';

@NgModule({
    imports: [
        CommonModule,
        ItemBoxModule
    ],
    exports: [ItemBoxDemoComponent],
    declarations: [ItemBoxDemoComponent],
    providers: [],
})
export class ItemBoxDemoModule { }
