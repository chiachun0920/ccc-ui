import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarDemoComponent } from './toolbar-demo.component';
import { ToolbarModule } from '../';
@NgModule({
    imports: [CommonModule,ToolbarModule],
    exports: [ToolbarDemoComponent],
    declarations: [ToolbarDemoComponent],
    providers: [],
})
export class ToolbarDemoModule { }
