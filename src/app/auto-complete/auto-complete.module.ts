import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AutoCompleteComponent } from './auto-complete.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [AutoCompleteComponent],
    declarations: [AutoCompleteComponent],
    providers: [],
})
export class AutoCompleteModule { }
