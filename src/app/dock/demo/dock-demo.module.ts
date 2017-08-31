import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DockDemoComponent } from './dock-demo.compnent';
import { DockModule } from '../';
@NgModule({
    imports: [CommonModule, DockModule],
    exports: [DockDemoComponent],
    declarations: [DockDemoComponent],
    providers: [],
})
export class DockDemoModule { }
