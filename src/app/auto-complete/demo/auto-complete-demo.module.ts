import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoCompleteModule } from '../auto-complete.module';

import { AutoCompleteDemoComponent } from './auto-complete-demo.component';

@NgModule({
    imports: [
        CommonModule,
        AutoCompleteModule
    ],
    exports: [AutoCompleteDemoComponent],
    declarations: [AutoCompleteDemoComponent],
    providers: [],
})
export class AutoCompleteDemoModule { }
