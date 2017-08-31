import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DockComponent } from './dock.component';

@NgModule({
    imports: [CommonModule],
    exports: [DockComponent],
    declarations: [DockComponent],
    providers: []
})
export class DockModule { }
