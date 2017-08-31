import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormatTextAreaDemoComponent } from './format-textarea-demo.component';
import { FormatTextAreaModule } from '../';
@NgModule({
    imports: [
        CommonModule,
        FormatTextAreaModule
    ],
    exports: [FormatTextAreaDemoComponent],
    declarations: [FormatTextAreaDemoComponent],
    providers: [],
})
export class FormatTextAreaDemoModule { }
